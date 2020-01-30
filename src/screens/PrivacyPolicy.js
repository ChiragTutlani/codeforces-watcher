import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import PrivacyPolicyHTML from '../components/PrivacyPolicyHTML'

const PrivacyPolicy = () => {
    return (
        <View style={{flex:1}}>
            <WebView 
                style={{flex:1}}
                source={{html : PrivacyPolicyHTML}}
                originWhitelist={["*"]}
            />
        </View>
    )
}

export default PrivacyPolicy