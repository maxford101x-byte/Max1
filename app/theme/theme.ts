import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e88e5',
    accent: '#ff4081',
    background: '#10141e',
    surface: '#21243a',
    text: '#ffffff',
  },
  roundness: 8,
};

export default theme;