import "antd/dist/antd.css";
// import "../styles/globals.css";

import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/apollo";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAglw9qEenZ6c7Zism7Psr1a6qnGjMalJE",
  authDomain: "mysite222-16104.firebaseapp.com",
  projectId: "mysite222-16104",
  storageBucket: "mysite222-16104.appspot.com",
  messagingSenderId: "794349238219",
  appId: "1:794349238219:web:652a5e3220933ef0a6684e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      {/* <Head> 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=58129ac07f6fdda65814d3d744bfb178"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}

export default MyApp;
