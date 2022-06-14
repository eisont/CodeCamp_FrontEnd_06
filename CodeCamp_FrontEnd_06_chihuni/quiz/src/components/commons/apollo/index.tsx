import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { useRecoilState } from 'recoil';
import { accessTokenState } from '../../../../src/commons/store';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { onError } from '@apollo/client/link/error';
import { useEffect } from 'react';

export default function ApolloSetting(props) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 3. 세번째 방법!!!
  useEffect(() => {
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === 'UNAUTHENTICATED') {
          getAccessToken().then((newAccessToken) => {
            setAccessToken(newAccessToken);

            operation.setContext({
              headers: {
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`,
              },
            });

            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: 'https://project08.site/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: 'include',
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
    // 변수는 memory에 저장됩니다.
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
