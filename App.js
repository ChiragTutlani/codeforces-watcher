import React from 'react';
import { AppLoading } from 'expo';

import {Provider} from 'react-redux'
import store from './src/redux/index'
import Container from './src/index'
import changeInitialRouteActionCreator from './src/redux/actions/changeInitialRouteAction'

import { retrieveKeyAsync } from './src/AsyncStorageMethods'

export default class App extends React.Component{
  state = {
    initialRouteConfigured: false
  }

  // Show privacy policy and T&C at the start if first time
  /*
  checkFirstTime = async () => {
    const data = await retrieveKeyAsync('usedBefore')
    if(data.status!=='ok'){
        return true
    }
    return false
  }
  */

  checkUserHandle = async () => {
    const data = await retrieveKeyAsync('userHandle')
    if(data.status==='ok'){
      return true
    }
    return false
  }

  async componentDidMount() {
    const userHandleExist = await this.checkUserHandle()
    const initialRoute = userHandleExist ? 'Home' : 'Login'
    store.dispatch(changeInitialRouteActionCreator(initialRoute))

    this.setState({
      initialRouteConfigured: true 
    })
  }

  render(){
    if(!this.state.initialRouteConfigured){
      return <AppLoading />
    }
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
}