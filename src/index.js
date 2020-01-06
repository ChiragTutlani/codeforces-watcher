import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoginScreen from './screens/LoginScreen'
import Homepage from './screens/Homepage'
import { retrieveUserHandleAsync } from './AsyncStorageMethods'

const checkUserHandle = async () => {
    const data = await retrieveUserHandleAsync()
    if(data.status==='ok'){
        return true
    }
    return false
} 

const initialRouteName = checkUserHandle() ? 'Home' : 'Login'

const AppNavigator = createSwitchNavigator({
    Login : {
        screen : LoginScreen
    },
    Home: {
        screen: Homepage
    }
},
{
    initialRouteName: initialRouteName
})

export default createAppContainer(AppNavigator)