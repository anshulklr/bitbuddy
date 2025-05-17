import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { useEffect } from 'react';
import { initializeGlobalPolyfills } from '../utils/polyfills';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initializeGlobalPolyfills();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;