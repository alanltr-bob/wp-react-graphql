import '../styles/index.css';
import { client } from '../lib/apollo';
import { ApolloProvider } from '@apollo/client/react';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
