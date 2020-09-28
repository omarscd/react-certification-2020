import React from 'react';
import { ThemeProvider } from 'styled-components';

const Theme = ({ children }) => {
  const theme = {
    mode: 'light',
    colors: {
      primary: '#F5453D',
      secondary: '#656FEB',
      tertiary: '#EA93F5',
      warning: '#FFE086',
      highlight: '#ACFFBE',
      font: '#404647',
    },
    fontSizes: {
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
    },
  };

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
