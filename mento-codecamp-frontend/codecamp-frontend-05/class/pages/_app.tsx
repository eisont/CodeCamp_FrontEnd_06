// import "../styles/globals.css";
import "antd/dist/antd.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import Head from "next/head";
import { onError } from "@apollo/client/link/error";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkKksE3jmPd6mQxsfpLTtJ8sNX57cSxUs",
  authDomain: "mysite1234-9ba99.firebaseapp.com",
  projectId: "mysite1234-9ba99",
  storageBucket: "mysite1234-9ba99.appspot.com",
  messagingSenderId: "486288941499",
  appId: "1:486288941499:web:e45ae91f62e2141abea49e",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

interface IUserInfo {
  name?: string;
  email?: string;
  picture?: string;
}
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: IUserInfo;
  setUserInfo?: Dispatch<SetStateAction<IUserInfo>>;
}
export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [accessToken, setAccessToken] = useState("");
  const [userInfo, setUserInfo] = useState<IUserInfo>({});
  const value = {
    accessToken,
    setAccessToken,
    userInfo,
    setUserInfo,
  };

  // if (process.browser) {
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // }

  // if(typeof window !== "undefined"){
  //   if (localStorage.getItem("accessToken")) {
  //     setAccessToken(localStorage.getItem("accessToken") || "");
  //   }
  // }

  useEffect(() => {
    // if (localStorage.getItem("accessToken")) {
    //   setAccessToken(localStorage.getItem("accessToken") || "");
    // }

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  // if (localStorage.getItem("accessToken")) {
  //   setAccessToken(localStorage.getItem("accessToken") || "");
  // }

  // const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  //   // 1. ????????? ??????
  //   if (graphQLErrors) {
  //     for (const err of graphQLErrors) {
  //       // 2. ?????? ????????? ???????????? ???????????? ??????(UNAUTHENTICATED)
  //       if (err.extensions.code === "UNAUTHENTICATED") {
  //         // 3. refreshToken?????? accessToken??? ????????? ??????
  //         getAccessToken().then((newAccessToken) => {
  //           // 4. ????????? ?????? accessToken ????????????
  //           setAccessToken(newAccessToken);

  //           // 5. ????????? ?????? accessToken?????? ?????? ????????? ?????? ???????????????
  //           operation.setContext({
  //             headers: {
  //               ...operation.getContext().headers,
  //               Authorization: `Bearer ${newAccessToken}`,
  //             },
  //           }); // ?????? ??????(accessToken???!! ????????????)
  //           return forward(operation); // ????????? operation ???????????????!!
  //         });
  //       }
  //     }
  //   }
  // });

  const uploadLink = createUploadLink({
    uri: "http://backend05.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  return (
    <div>
      {/* <Head> ?????? ??????????????? ??????????????? ???????????? ???????????? ???????????????
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9263f0edb6dedfd7f8d69aa27fa25d82"
        ></script>
      </Head> */}
      <GlobalContext.Provider value={value}>
        <ApolloProvider client={client}>
          <Global styles={globalStyles} />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </GlobalContext.Provider>
    </div>
  );
}

export default MyApp;
