import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class SearchAndCompare extends React.Component{
    render(){
        return(
            <View style={style.searchAndCompareView}>
                <Text>Search and compare</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    searchAndCompareView : {
        flex: 1,
        alignItems: 'center',
        justifyContent : 'center'
    }
})

export default SearchAndCompare