import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'
import {Ionicons} from '@expo/vector-icons'

const CustomButtonWithIcon = (props) => {
    return(
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.onPress}
            style={[styles.touchableOpacity, {backgroundColor: props.color}]}
        >
            <Ionicons name={props.iconName} size={31} color={props.textColor} type={props.type}/>
            <Text style={[styles.text,{color : props.textColor}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity : {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        height: 50,
        width: 120,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: {height: 10, width: 0},
        shadowRadius: 20,
    },
    text : {
        textAlign: 'center',
        fontSize: 16,
    }
})

CustomButtonWithIcon.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
}

export default CustomButtonWithIcon