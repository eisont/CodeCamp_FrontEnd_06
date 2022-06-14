// 1. /pages/quiz06/payment/login/index.tsx 페이지를 만들고, 로그인 화면을 구현해 주세요.
// 2. 로그인에 성공하면 /pages/quiz06/payment/loading/index.tsx 페이지로 이동해 주세요.

import { gql, useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../src/commons/store';

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function PaymentLoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useMutation(LOGIN_USER);

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: {
        email,
        password,
      },
    });
    // console.log(result);
    const accessToken = result.data.loginUser.accessToken;
    setAccessToken(accessToken);
    localStorage.setItem('accessToken', accessToken);
    console.log(accessToken);
    router.push('../payment/loading');
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
      <input onChange={onChangeEmail} placeholder='email 입력하삼!' type='email' />
      <input onChange={onChangePassword} placeholder='password 입력하삼!' type='password' />
      <button onClick={onClickLogin}>가입하려고?</button>
    </>
  );
}
