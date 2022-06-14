import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'antd/dist/antd.css';
import Layout from '../src/components/commons/layout';
import { AppProps } from 'next/app';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { createUploadLink } from 'apollo-upload-client';

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: 'http://backend06.codebootcamp.co.kr/graphql',
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
    // 변수는 memory에 저장됩니다.
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
export default MyApp;
