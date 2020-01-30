import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react'
<<<<<<< HEAD
import AboutNavigator from './AboutNavigator'
import ProblemSet from './ProblemSet'
import Contest from './Contest'
import SearchAndCompare from './SearchAndCompare'
=======
import About from './About'
import ProblemSet from './ProblemSet'
import Contest from './Contest'
import SearchAndCompare from './SearchAndCompare'
import Watch from './Watch'
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
import Me from './Me'

import {Ionicons} from '@expo/vector-icons'
import { TAB_BUTTON_ACTIVE, ACCENT_COLOR, TAB_BUTTON_INACTIVE } from '../colorTheme'

const HomepageTabNavigator = createBottomTabNavigator(
    {
<<<<<<< HEAD
        AboutNavigator: {
            screen: AboutNavigator,
            navigationOptions : {
                title: 'About'
            }
        },
=======
        About: About,
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
        ProblemSet: {
            screen: ProblemSet,
            navigationOptions: {
                title: 'Problems'
            }
        },
        Contest: Contest,
        SearchAndCompare: {
            screen: SearchAndCompare,
            navigationOptions : {
                title : 'Search User'
            }
        },
<<<<<<< HEAD
=======
        Watch: Watch,
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
        Me: Me,
    },
    {
        initialRouteName : 'Contest',
        backBehavior: 'history',
        resetOnBlur: true,
        lazy: true,
        defaultNavigationOptions : ({navigation}) => ({
            tabBarIcon : ({tintColor}) => {
                let { routeName } = navigation.state
                let iconName;
<<<<<<< HEAD
                if(routeName==='AboutNavigator') {iconName = 'md-information-circle'}
=======
                if(routeName==='About') {iconName = 'md-information-circle'}
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
                if(routeName==='ProblemSet') {iconName = 'md-copy'}
                if(routeName==='Contest') {iconName = 'md-list'}
                if(routeName==='SearchAndCompare') {iconName = 'md-search'}
                if(routeName==='Watch') {iconName = 'md-eye'}
                if(routeName==='Me') {iconName = 'md-person'}

                return (<Ionicons name={iconName} size={31} color={tintColor} />)
            }
        }),
        tabBarOptions : {
            activeTintColor: TAB_BUTTON_ACTIVE,
            inactiveTintColor:  TAB_BUTTON_INACTIVE,
            style : {
                backgroundColor : ACCENT_COLOR,
            }
        }
    }
)

export default createAppContainer(HomepageTabNavigator)