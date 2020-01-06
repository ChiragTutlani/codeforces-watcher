import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class You extends React.Component{
    render(){
        return(
            <View style={style.youView}>
                <Text>You</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    youView : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default You