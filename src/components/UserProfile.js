import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PROFILE_RANKING_TEXT, REFRESH_BUTTON, PROFILE_NAME_LOCATION_TEXT, USER_DETAIL_BACKGROUND } from '../colorTheme'

verdanaFont = null
const UserProfileTemp = ({profileData, verdana, marginHorizontal, marginVertical}) => {
    let name = null
    if(profileData.firstName!==undefined&&profileData.lastName!==undefined){
        name = profileData.firstName + ' ' + profileData.lastName
    }else{
        name = profileData.firstName!==undefined ? profileData.firstName : profileData.lastName
    }

    verdanaFont = verdana
    return(
        <View style={[styles.profileView,{marginHorizontal: marginHorizontal,marginVertical: marginVertical}]}>
            <View>
                <Text style={styles.contentTop}>{profileData.rank}</Text>
                <Text style={styles.contentTop}>{profileData.handle}</Text>
            </View>
            <View>
                <Text style={styles.middleContent}>{`${name}, ${profileData.city}, ${profileData.country}`}</Text>
                <Text style={styles.middleContent}>{`From ${profileData.organization}`}</Text>
            </View>
            <Text style={styles.rating}>{`Contest rating: ${profileData.rating} (max. ${profileData.maxRank}, ${profileData.maxRating})`}</Text>
            <View>
                <Text style={styles.time}>{`Last visit: ${new Date(profileData.lastOnlineTimeSeconds*1000)}`}</Text>
                <Text style={styles.time}>{`Registered: ${new Date(profileData.registrationTimeSeconds*1000)}`}</Text>
            </View>
        </View>
    )
}

const UserProfile = ({profileData, verdana, marginHorizontal, marginVertical}) => {
    let name = null
    if(profileData.firstName!==undefined&&profileData.lastName!==undefined){
        name = profileData.firstName + ' ' + profileData.lastName
    }else{
        name = profileData.firstName!==undefined ? profileData.firstName : profileData.lastName
    }

    verdanaFont = verdana
    return(
        <View style={[styles.verticalMainFlex, {marginHorizontal: marginHorizontal,marginVertical: marginVertical}]}>
            { name!=null ? <View style={styles.nameBox}>
                <Text style={styles.nameText}>{name.toUpperCase()}</Text>
            </View> : null }
            <View style={styles.contentBox}>
                <Text style={styles.infoHeadText}>Bio</Text>
                <Text style={styles.content}>{`User handle : ${profileData.handle}`}</Text>
                { profileData.email != undefined ? <Text style={styles.content}>{` Email : ${profileData.country}`}</Text> : null }    
            </View>
            { profileData.city!=undefined || profileData.country!=undefined ? 
                <View style={styles.contentBox}>
                    <Text style={styles.infoHeadText}>Location</Text>
                    { profileData.city != undefined ? <Text style={styles.content}>{profileData.city}</Text> : null }
                    { profileData.country != undefined ? <Text style={styles.content}>{profileData.country}</Text> : null }    
                </View>
            : null}
            { profileData.organization!=undefined ? 
                <View style={styles.contentBox}>
                    <Text style={styles.infoHeadText}>Organization</Text>
                    <Text style={styles.content}>{profileData.organization}</Text>    
                </View>
            : null}
            <View style={styles.contentBox}>
                <Text style={styles.content}>{`Last Online : ${new Date(profileData.lastOnlineTimeSeconds*1000)}`}</Text>
                <Text style={styles.content}>{`Registered : ${new Date(profileData.registrationTimeSeconds*1000)}`}</Text>
            </View>
            <View style={styles.hbox}>
                <View style={styles.ratingBox}>
                    <Text style={styles.ratingHeadText}>Rating</Text>
                    <Text style={styles.content}>{profileData.rating}</Text>
                    <Text style={styles.ratingHeadText}>Maximum Rating</Text>
                    <Text style={styles.content}>{profileData.maxRating}</Text>
                </View>
                <View style={styles.rankingBox}>
                    <Text style={styles.ratingHeadText}>Rank</Text>
                    <Text style={styles.content}>{profileData.rank}</Text>
                    <Text style={styles.ratingHeadText}>Maximum Rank</Text>
                    <Text style={styles.content}>{profileData.maxRank}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    verticalMainFlex : {
        flex : 1,
    },
    nameBox : {
        alignItems : 'center',
        backgroundColor : USER_DETAIL_BACKGROUND,
        borderRadius : 10,
        paddingVertical : 8
    },
    nameText : {
        fontSize : 30,
        fontFamily: verdanaFont
    },
    infoHeadText : {
        fontFamily: verdanaFont,
        fontSize: 24,
        paddingBottom: 3,
    },
    ratingHeadText : {
        fontFamily: verdanaFont,
        fontSize: 20,
        paddingBottom: 3,
    },
    content : {
        fontFamily: verdanaFont,
        fontSize: 16,
    },
    contentBox : {
        backgroundColor : USER_DETAIL_BACKGROUND,
        borderRadius : 8,
        paddingHorizontal : 6,
        paddingVertical: 6,
        marginTop : 8
    },
    hbox:{
        flexDirection : 'row',
        marginTop : 8,
    },
    rankingBox : {
        flex : 1,
        backgroundColor : USER_DETAIL_BACKGROUND,
        borderRadius : 8,
        paddingHorizontal : 6,
        marginLeft: 3,
    },
    ratingBox: {
        flex: 1,
        backgroundColor : USER_DETAIL_BACKGROUND,
        borderRadius : 8,
        paddingHorizontal : 6,
        marginRight : 3,
    }
})

const stylesTemp = StyleSheet.create({
    profileView: {
        padding:10, 
        backgroundColor: REFRESH_BUTTON, 
        borderRadius:5,
        flex: 1,
        justifyContent:'space-between'
    },
    contentTop: {
        fontFamily: verdanaFont,
        color: PROFILE_RANKING_TEXT,
        fontSize:16
    },
    middleContent: {
        fontFamily: verdanaFont,
        color: PROFILE_NAME_LOCATION_TEXT,
        fontSize:16
    },
    rating:{
        fontFamily: verdanaFont,
        color: 'black',
        fontSize:16
    },
    time:{
        fontFamily: verdanaFont,
        color: 'black',
        fontSize:16,
    }
})

export default UserProfile