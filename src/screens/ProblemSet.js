import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class ProblemSet extends React.Component{
    render(){
        return(
            <View style={style.problemSetView}>
                <Text>Problem set</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    problemSetView : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default ProblemSet