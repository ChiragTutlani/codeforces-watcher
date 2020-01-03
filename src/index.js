import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {connect} from 'react-redux'

class Container extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>Welcome to Codeforces Watcher</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
})

const mapStateToProps = state => ({
    state: state
})

export default connect(mapStateToProps)(Container)