import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import Homepage from './screens/Homepage'

import store from './redux/index'

const AppNavigator = createSwitchNavigator({
    Login : {
        screen : LoginScreen
    },
    Home: {
        screen: Homepage
    }
},
{
    initialRouteName: store.getState().initialRoute
})

export default createAppContainer(AppNavigator)