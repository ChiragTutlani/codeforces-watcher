import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import React from 'react'
import { retrieveUserHandleAsync } from '../AsyncStorageMethods'
import yourUserHandleActionCreator from '../redux/actions/yourUserHandleAction'
import About from './About'
import ProblemSet from './ProblemSet'
import Contest from './Contest'
import SearchAndCompare from './SearchAndCompare'
import Watch from './Watch'
import You from './You'

import {Ionicons} from '@expo/vector-icons'
import { TAB_BUTTON_ACTIVE, ACCENT_COLOR, TAB_BUTTON_INACTIVE } from '../colorTheme'

const setUserHandle = async () => {
    const data = await retrieveUserHandleAsync()
    if(data.status==='ok'){
        yourUserHandleActionCreator(data.userHandle)
    }
}

setUserHandle()

const HomepageTabNavigator = createBottomTabNavigator(
    {
        About: About,
        ProblemSet: ProblemSet,
        Contest: Contest,
        SearchAndCompare: SearchAndCompare,
        Watch: Watch,
        You: You
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
                if(routeName==='About') {iconName = 'md-information-circle'}
                if(routeName==='ProblemSet') {iconName = 'md-copy'}
                if(routeName==='Contest') {iconName = 'md-list'}
                if(routeName==='SearchAndCompare') {iconName = 'md-search'}
                if(routeName==='Watch') {iconName = 'md-eye'}
                if(routeName==='You') {iconName = 'md-person'}

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