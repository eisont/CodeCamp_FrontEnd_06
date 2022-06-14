// 1. 로그인을 했을 때, 받아오게 되는 refreshToken을 쿠키에 저장하기 위해 Apollo 설정에서, credentials를 include로 설정해 주세요.
// ⇒ 설정 후, 로그인을 시도하면 refreshToken을 아래와 같이 받아오게 됩니다.

// 1. 실제로 에러가 발생하였을 때, 인증관련 에러인지 확인하고, 인증 에러라면 refreshToken으로 accessToken을 다시 받아오는 로직을 getAccessToken이라는 함수를 만들고 작성해 주세요.

// 2. 새롭게 받은 accessToken을 활용해서, 기존에 실패했던 쿼리를 재시도 하는 로직을 Apollo 설정의 onError 내부에 작성해 주세요.

// 3. 새로고침을 해서 변수에 저장된 accessToken이 초기화 되었을 때, 새롭게 accessToken을 요청해서 적용하는 코드를 Apollo header 설정에서 추가해 주세요.

import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../src/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function RefreshTokenPage() {
  const router = useRouter();
  const [loginUser] = useMutation(LOGIN_USER);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aaa, setAccessToken] = useRecoilState(accessTokenState);

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const loginBt = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    console.log(result);
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    alert('로그인에 성공했다!!!');
    console.log(aaa);
    router.push('/30quiz/02-RefreshToken-success');
  };

  return (
    <>
      <input type='text' onChange={onChangeEmail} placeholder='이메일을 입력하세요.' /> <br />
      <input type='password' onChange={onChangePassword} placeholder='비밀번호을 입력하세요.' /> <br />
      <button onClick={loginBt}>로그인</button>
    </>
  );
}
