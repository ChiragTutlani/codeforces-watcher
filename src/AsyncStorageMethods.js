import {AsyncStorage} from 'react-native'

export const storeUserHandleAsync = async (userHandle) => {
    await AsyncStorage.setItem('userHandle',userHandle)
}

export const retrieveUserHandleAsync = async () => {
    try {
        const userHandle = await AsyncStorage.getItem('userHandle')
        if(userHandle!==null){
            return {
                status : 'ok',
                userHandle : userHandle
            }
        }
        return {
            status: 'notFound',
        }
    }catch(error){
        return {
            status: 'error',
            error: 'error'
        }
    }
}

export const removeUserHandleAsync = async () => {
    try {
        const data = await AsyncStorage.removeItem('userHandle')
        return {
            status: 'ok'
        }
    }catch(error){
        return{
            status: 'error'
        }
    }
}