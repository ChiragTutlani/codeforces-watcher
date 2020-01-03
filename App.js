import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux'

import store from './src/redux/index'
import Container from './src/index'

export default function App() {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
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
