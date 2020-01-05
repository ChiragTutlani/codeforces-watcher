import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const TextInputView = (props) => {
    return(
        <View style={styles.inputView}>
            <TextInput 
                style={styles.textInput}
                onChangeText={(text)=>props.onChangeText(text)}
                clearButtonMode='unless-editing'
                keyboardAppearance='dark'
                placeholder="CODEFORCES USER HANDLE"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputView : {
        flex: 2,
        justifyContent: 'center'
    },
    textInput : {
        height: 45,
        width : 250,
        borderBottomWidth: 2,
        padding: 8,
        textAlign: 'center'
    },
})

TextInputView.propTypes = {
    onChangeText: PropTypes.func.isRequired,
}

export default TextInputView