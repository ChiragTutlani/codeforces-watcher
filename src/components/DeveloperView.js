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
<<<<<<< HEAD
        justifyContent: 'space-evenly',
=======
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
        backgroundColor: ACCENT_COLOR
    }
})

export default DeveloperView