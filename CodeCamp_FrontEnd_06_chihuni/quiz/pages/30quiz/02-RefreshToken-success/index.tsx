import { gql, useQuery } from '@apollo/client';

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      _id
    }
  }
`;

export default function LoginSuccess() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  console.log(data);

  return (
    <>
      <div>{data?.fetchUserLoggedIn.name}님 반가워요!!!</div>
    </>
  );
}
