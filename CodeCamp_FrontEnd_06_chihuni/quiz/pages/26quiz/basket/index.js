import { gql, useApolloClient, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState, userInfoState } from '../../../src/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    // 1. 로그인하기
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    const accessToken = result.data.loginUser.accessToken;
    console.log(accessToken);

    // 유저 정보 받아오기
    const resultUserInfo = await client.query({
      query: FETCH_USER_LOGGED_IN,
      context: {
        headers: { Authorization: `Bearer ${accessToken}` },
      },
    });

    const userInfo = resultUserInfo.data.fetchUserLoggedIn;
    console.log(userInfo);

    // 글로벌스테이트에 저장하기
    setAccessToken(accessToken);
    setUserInfo(userInfo);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    alert('비회원으로 담긴 게시물 장바구니가 존재합니다.');
    alert('이동하겠습니까?');
    router.push('/26-02-basket');
  };

  return (
    <>
      이메일: <input type='email' onChange={onChangeEmail} />
      <br />
      비밀번호: <input type='password' onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
      <button onClick={onClickLogin}>이동하기</button>
    </>
  );
}
