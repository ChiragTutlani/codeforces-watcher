import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Contest extends React.Component{
    render(){
        return(
            <View style={style.contestView}>
                <Text>Contest</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    contestView : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default Contest