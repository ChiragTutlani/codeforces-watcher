import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import Homepage from './screens/Homepage'


const AppNavigator = createSwitchNavigator({
    Login : {
        screen : LoginScreen
    },
    Home: {
        screen: Homepage
    }
},
{
    initialRouteName: 'Login'
})

export default createAppContainer(AppNavigator)