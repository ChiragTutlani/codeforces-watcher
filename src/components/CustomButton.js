import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const CustomButton = (props) => {
    return(
        <TouchableOpacity
            disabled={props.disabled}
            onPress={props.onPress}
            style={[styles.touchableOpacity, {backgroundColor: props.color}]}
        >
            <Text style={[styles.text,{color : props.textColor}]}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableOpacity : {
        display: 'flex',
        height: 50,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
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

CustomButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default CustomButton