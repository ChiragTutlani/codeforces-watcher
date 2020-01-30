import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PROFILE_RANKING_TEXT, REFRESH_BUTTON, PROFILE_NAME_LOCATION_TEXT } from '../colorTheme'

verdanaFont = null
const UserProfile = ({profileData, verdana, marginHorizontal, marginVertical}) => {
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

const styles = StyleSheet.create({
    profileView: {
        padding:10, 
        backgroundColor: REFRESH_BUTTON, 
<<<<<<< HEAD
        borderRadius:5,
        flex: 1,
=======
        borderRadius:5, 
        flex: 1, 
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
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
        fontSize:16
    }
})

export default UserProfile