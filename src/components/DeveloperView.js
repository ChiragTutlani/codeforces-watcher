import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ACCENT_COLOR } from '../colorTheme'

const DeveloperView = () => {
    return (
        <View style={styles.developerView}>
            <Text style={{textAlign: 'center'}}>&copy; 2019</Text>
            <Text style={{textAlign: 'center'}}>Developed by Chirag Tutlani</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    developerView: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: ACCENT_COLOR
    }
})

export default DeveloperView