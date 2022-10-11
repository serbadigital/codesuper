import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
import { Provider as ThemeProvider } from 'react-native-paper';
import theme from './config/theme';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator';
import FirebaseProvider from './components/FirebaseProvider';

YellowBox.ignoreWarnings(['Setting a timer']);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <FirebaseProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </FirebaseProvider>
    </ThemeProvider>
  );
}

