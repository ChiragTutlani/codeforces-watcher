import {AsyncStorage} from 'react-native'

export const storeKeyAsync = async (key,value) => {
    await AsyncStorage.setItem(key,value)
}

export const retrieveKeyAsync = async (key) => {
    try {
        const userHandle = await AsyncStorage.getItem(key)
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

export const removeKeyAsync = async (key) => {
    try {
        const data = await AsyncStorage.removeItem(key)
        return {
            status: 'ok'
        }
    }catch(error){
        return{
            status: 'error'
        }
    }
}