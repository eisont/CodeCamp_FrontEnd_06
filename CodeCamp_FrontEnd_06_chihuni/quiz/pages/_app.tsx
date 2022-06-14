import 'antd/dist/antd.css';

// import "../styles/globals.css";
import { Global } from '@emotion/react';
import Layout from '../src/components/commons/layout';
import { globalStyles } from '../src/commons/styles/globalStyles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AppProps } from 'next/app';
import ApolloSetting from '../src/components/commons/apollo';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ApolloSetting>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
