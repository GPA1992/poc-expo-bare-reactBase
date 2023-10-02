import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from './src/styles/theme';
import SingIn from './src/screens/SingIn/SingIn';
import { useFonts } from 'expo-font';


export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require('./src/assets/fonts/Roboto/Roboto-Regular.ttf')
  });

  return (
  <NativeBaseProvider theme={THEME}>
      <SingIn />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
