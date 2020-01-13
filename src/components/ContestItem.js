import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LIST_ITEM_BACKGROUND, CONTEST_STATUS_BUTTON_COLOR, CONTEST_STANDINGS_BUTTON_COLOR } from '../colorTheme'
import CustomButton from './CustomButton'

let fontVerdana = null
const ProblemItem = ({onStatus, onStandings, contestDescription, verdana}) => {
    fontVerdana = verdana
    return(
        <View style={styles.contestItem}>
            <View>
                <Text style={styles.boldText}>{contestDescription.name.toUpperCase()}</Text>
                <Text style={styles.text}>{`Phase: ${contestDescription.phase}`}</Text>
                { contestDescription.startTimeSeconds!==undefined ? 
                    <Text style={styles.text}>{`Start Time: ${new Date(contestDescription.startTimeSeconds*1000)}`}</Text> : null }
                <Text style={styles.text}>{`Duration: ${formatTime(contestDescription.durationSeconds)}`}</Text>
                { contestDescription.kind ?
                    <Text style={styles.text}>{`Kind: ${contestDescription.kind}`}</Text> : null }
            </View>
            <View style={styles.buttonView}>
                <CustomButton disabled={false} onPress={()=>onStatus()}
                    color={CONTEST_STATUS_BUTTON_COLOR} textColor={'white'}
                    text={'STATUS'}
                />
                <CustomButton disabled={false} onPress={()=>onStandings()}
                    color={CONTEST_STANDINGS_BUTTON_COLOR} textColor={'black'}
                    text={'STANDINGS'}
                />
            </View>            
        </View>
    )
}

const styles = StyleSheet.create({
    contestItem: {
        display: 'flex',
        margin: 12,
        padding: 8,
        backgroundColor: LIST_ITEM_BACKGROUND,
        borderRadius: 6,
    },
    text: {
        fontFamily: fontVerdana
    },
    boldText: {
        fontFamily: fontVerdana,
        fontWeight: 'bold'
    },
    buttonView:{
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

const formatTime = (seconds) => {
    let timeInMinutes = seconds/60
    let hours = Math.floor(timeInMinutes/60)
    let minutes = timeInMinutes%60
    return hours + ' hr ' + minutes + ' min' 
}

export default ProblemItem