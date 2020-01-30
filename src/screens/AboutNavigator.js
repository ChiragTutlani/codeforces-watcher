import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import About from './About'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'

let RouteConfigs = {
    About : {
        screen: About,
    },
    PrivacyPolicy : {
        screen: PrivacyPolicy
    },
    TermsAndConditions : {
        screen: TermsAndConditions
    }
}

let StackNavigatorConfigs = {
    initialRouteName : 'About',
    headerMode: 'none'
}

const stack =  createStackNavigator(RouteConfigs, StackNavigatorConfigs)

export default createAppContainer(stack)