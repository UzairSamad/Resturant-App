import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator'
import { ConfigureStore } from './src/redux/configureStore'
import { Provider } from 'react-redux'
const store = ConfigureStore()

export default function App() {

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
