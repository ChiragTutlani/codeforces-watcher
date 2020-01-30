import React from 'react';
import {Provider} from 'react-redux'
import store from './src/redux/index'
import Container from './src/index'

export default class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
}