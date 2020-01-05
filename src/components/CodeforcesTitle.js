import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const CodeforcesTitle = (props) => {
    return(
        <View style={styles.titleView}>
            {props.fontLoaded ? (<Text style={styles.title}>CODEFORCES</Text>) : null}
            {props.fontLoaded ? (<Text style={styles.title}>WATCHER</Text>) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    titleView : {
        flex: 5,
        justifyContent: 'center'
    },
    title: {
        fontSize: 43,
        fontFamily: 'verdana',
        alignSelf: 'center',
    },
})

CodeforcesTitle.propTypes = {
    fontLoaded: PropTypes.bool.isRequired
}

export default CodeforcesTitle