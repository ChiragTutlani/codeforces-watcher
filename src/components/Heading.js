import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import PropTypes from 'prop-types'
import {Ionicons} from '@expo/vector-icons'
import { REFRESH_BUTTON, HEADING_BACKGROUND_COLOR, HEADING_TEXT_COLOR } from '../colorTheme'

const Heading = (props) => {
    return(
        <View style={styles.headingView}>
            <Text style={{fontFamily: props.verdana, fontSize: props.fontSize, color: HEADING_TEXT_COLOR}}>
                {props.heading}
            </Text>
            {props.showRefresh===false ? null : <TouchableOpacity onPress={props.refresh} >
                <Ionicons name='md-refresh' size={36} color={REFRESH_BUTTON}/>
            </TouchableOpacity>}
        </View>
    )
}

Heading.propTypes = {
    verdana: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired,
    refresh: PropTypes.func,
    showRefresh: PropTypes.bool
}

const styles = StyleSheet.create({
    headingView: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: HEADING_BACKGROUND_COLOR,
        elevation: 4
    }
})

export default Heading