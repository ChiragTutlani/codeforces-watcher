import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Watch extends React.Component{
    render(){
        return(
            <View style={style.watchView}>
                <Text>Watch</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    watchView : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default Watch