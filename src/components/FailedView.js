import React from 'react';
import { Text, View } from 'react-native'
import { CONTENT_BACKGROUND } from '../colorTheme'
import StatusBarView from './StatusBarView';

const FailedView = ({content, verdana}) => {
    return(
        <View style={{flex:1}}>
            <StatusBarView/>
            <View style={{flex:15, backgroundColor: CONTENT_BACKGROUND, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:verdana,fontSize:32}}>{`Could not render ${content}`}</Text>
            </View>
        </View>
    )
}

export default FailedView