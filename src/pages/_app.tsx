import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apolloClient";

import "@/styles/globals.css";
import Navbar from "@/components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient()}>
      <Navbar />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
