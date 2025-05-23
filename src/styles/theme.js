import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#fff5e6',
      100: '#ffe0b2',
      200: '#ffcc80',
      300: '#ffb74d',
      400: '#ffa726',
      500: '#ff9800',
      600: '#fb8c00',
      700: '#f57c00',
      800: '#ef6c00',
      900: '#e65100',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});