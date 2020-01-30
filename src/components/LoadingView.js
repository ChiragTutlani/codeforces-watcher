import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import PropTypes from 'prop-types'

import {ACCENT_COLOR, CONTENT_BACKGROUND} from '../colorTheme'
import StatusBarView from './StatusBarView'
import Heading from './Heading'

const LoadingView = (props) => {
    return (
        <View style={{flex:1}}>
            <StatusBarView/>
            <Heading verdana={props.verdana} fontSize={props.fontSize}
                heading={props.heading} refresh={props.refresh}
            />
            <View style={{flex:15, backgroundColor: CONTENT_BACKGROUND}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size='large' color={ACCENT_COLOR} />
                </View>
            </View>
        </View>
        
    )
}

LoadingView.propTypes = {
    verdana: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired
}

export default LoadingView