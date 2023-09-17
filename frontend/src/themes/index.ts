import { createTheme, Theme } from '@mui/material/styles';

interface CustomTheme extends Theme {
  // Define custom theme properties if needed
}

const ltrLightTheme: CustomTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'light',
  },
});

const ltrDarkTheme: CustomTheme = createTheme({
  direction: 'ltr',
  palette: {
    mode: 'dark',
  },
});

const rtlLightTheme: CustomTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
  },
});

const rtlDarkTheme: CustomTheme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'dark',
  },
});

export { ltrLightTheme, ltrDarkTheme, rtlLightTheme, rtlDarkTheme };