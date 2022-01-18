import React, { FC } from 'react';
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import UserProvider from '../contex/user';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </ChakraProvider>
  );
};

export default App;
