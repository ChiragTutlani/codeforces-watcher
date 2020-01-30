import React from 'react'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import {ACCENT_COLOR} from '../colorTheme'

/*
    StatusBarView should not be wrapped in flex component which has alignItems: center && justifyContent: center
*/

const StatusBarView = () => {
    return(
        <View style={styles.statusBarView}></View>
    )
}

const styles = StyleSheet.create({
    statusBarView : {
        height: Constants.statusBarHeight,
        backgroundColor: ACCENT_COLOR
    }
})

export default StatusBarView