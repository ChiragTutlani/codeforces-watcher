import React from 'react'
import { View, Text } from 'react-native'
import { retrieveUserHandleAsync } from '../AsyncStorageMethods'
import yourUserHandleActionCreator from '../redux/actions/yourUserHandleAction'

class Homepage extends React.Component{
    async componentDidMount(){
        const data = await retrieveUserHandleAsync()
        if(data.status==='ok'){
            yourUserHandleActionCreator(data.userHandle)
        }
    }

    render(){
        return(
            <View>
                <Text>Homepage</Text>
            </View>
        )
    }
}

export default Homepage