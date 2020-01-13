import React from 'react';
import { Text, View, StyleSheet } from 'react-native'
import { CONTENT_BACKGROUND } from '../colorTheme'
import StatusBarView from './StatusBarView';
import Heading from './Heading';

const FailedView = (props) => {
    return(
        <View style={{flex:1}}>
            <StatusBarView/>
            <Heading verdana={props.verdana} fontSize={props.fontSize}
                heading={props.heading} refresh={props.refresh}
            />
            <View style={styles.contentView}>
                <Text style={{fontFamily:props.verdana,fontSize:32, textAlign: 'center'}}>{`${props.content.toUpperCase()} COULD NOT LOADED AT THE MOMENT`}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentView: {
        flex:15, 
        backgroundColor: CONTENT_BACKGROUND, 
        alignItems: 'center', 
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10
    }
})

export default FailedView