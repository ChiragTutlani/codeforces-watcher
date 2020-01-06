import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const About = () => {
    return (
        <View style={styles.aboutView}>
            <Text>About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default About