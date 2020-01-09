import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { LIST_ITEM_BACKGROUND } from '../colorTheme'

const ProblemItem = ({onPress, question, verdana}) => {
    return(
        <TouchableOpacity onPress={()=>onPress()} style={styles.problemItem}>
            <View style={styles.nameTypeView}>
                <Text style={[styles.nameText,{fontFamily: verdana, fontWeight:'bold'}]}>{question.name.toUpperCase()}</Text>
                <Text style={[styles.typeText,{fontFamily: verdana}]}>{question.type.charAt(0) + question.type.slice(1).toLowerCase()}</Text>
            </View>
            <View style={styles.nameTypeView}>
                <Text style={[styles.nameText,{fontFamily: verdana}]}>{'Points: '+question.points}</Text>
                <Text style={[styles.typeText,{fontFamily: verdana}]}>{'Rating: '+question.rating}</Text>
            </View>
            <View style={styles.tagsView}>
                <Text style={[styles.tagsView,{fontFamily:'verdana'}]}>
                    {'Tags: ' + question.tags.map((tag)=>tag.charAt(0).toUpperCase() + tag.slice(1)).join(', ')}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    problemItem: {
        display: 'flex',
        margin: 12,
        padding: 8,
        backgroundColor: LIST_ITEM_BACKGROUND,
        borderRadius: 6,
    },
    nameTypeView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameText:{
        flex: 10,
        justifyContent: 'flex-start'
    },
    typeText:{
        flex: 5,
        justifyContent:'flex-end'
    }
})

export default ProblemItem