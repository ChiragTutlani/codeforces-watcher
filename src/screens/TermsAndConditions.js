import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import TermsAndConditionsHTML from '../components/TermsAndConditionsHTML'

const TermsAndConditions = () => {
    return (
        <View style={{flex:1}}>
            <WebView 
                style={{flex:1}}
                source={{html : TermsAndConditionsHTML}}
                originWhitelist={["*"]}
            />
        </View>
    )
}

export default TermsAndConditions