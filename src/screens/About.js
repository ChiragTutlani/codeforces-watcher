<<<<<<< HEAD
import React from 'react'
import { View, Text, StyleSheet, Image } from "react-native"
import * as Font from 'expo-font'
import { Dimensions } from 'react-native'
import * as WebBrowser from 'expo-web-browser'

import StatusBarView from '../components/StatusBarView'
import Heading from '../components/Heading'
import { 
    CONTENT_BACKGROUND, 
    HEADING_BACKGROUND_COLOR,
    GITHUB_BUTTON_COLOR, GITHUB_BUTTON_TEXT,
    LINKEDIN_BUTTON_COLOR, LINKEDIN_BUTTON_TEXT,
    PRIVACY_POLICY_BUTTON, PRIVACY_POLICY_TEXT,
    TANDC_BUTTON, TANDC_BUTTON_TEXT
} from '../colorTheme'
import CustomButton from '../components/CustomButton'
import CustomButtonWithIcon from '../components/CustomButtonWithIcon'

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
const appLogoDimension = (screenHeight<screenWidth ? screenHeight:screenWidth) - 20

class About extends React.Component{
    state = {
        fontLoaded: false,
        githubLink: 'https://github.com/Chirag161198',
        linkedinLink: 'https://www.linkedin.com/in/chirag1611',
    }
    
    async componentDidMount(){
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        this.setState({ fontLoaded: true })
    }

    onPrivacyPolicy = () => {
        this.props.navigation.navigate('PrivacyPolicy')
    }

    onTandC = () => {
        this.props.navigation.navigate('TermsAndConditions')
    }

    openBrowser = async (url) => {
        const options = {
            toolbarColor : HEADING_BACKGROUND_COLOR,
            enableBarCollapsing: true,
        }
        await WebBrowser.openBrowserAsync(url, options)
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <StatusBarView />
                <Heading verdana={this.state.fontLoaded ? 'verdana':''} showRefresh={false}
                    fontSize={32} heading={'About'} />
                <View style={styles.aboutView}>
                    <Image source={require('../AppLogo/App_Logo_Transparent.png')} style={styles.appLogo}/>
                    <View style={styles.developerView}>
                        <Text style={{fontSize: 18, fontFamily: 'verdana'}}>DEVELOPED BY CHIRAG TUTLANI</Text>
                        <CustomButtonWithIcon color={GITHUB_BUTTON_COLOR} text={'GitHub'}
                            disabled={false} textColor={GITHUB_BUTTON_TEXT} onPress={()=>this.openBrowser(this.state.githubLink)}
                            iconName={'logo-github'}
                        />
                        <CustomButtonWithIcon color={LINKEDIN_BUTTON_COLOR} text={'LinkedIn'}
                            disabled={false} textColor={LINKEDIN_BUTTON_TEXT} onPress={()=>this.openBrowser(this.state.linkedinLink)}
                            iconName={'logo-linkedin'}
                        />
                    </View>
                    <View style={styles.termsView}>
                        <CustomButton color={PRIVACY_POLICY_BUTTON} text={'Privacy Policy'}
                            disabled={false} textColor={PRIVACY_POLICY_TEXT} onPress={()=>this.onPrivacyPolicy()}
                        />
                        <CustomButton color={TANDC_BUTTON} text={'Terms and Conditions'}
                            disabled={false} textColor={TANDC_BUTTON_TEXT} onPress={()=>this.onTandC()}
                        />  
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    aboutView : {
        flex: 15,
        backgroundColor: CONTENT_BACKGROUND
    },
    appLogo: {
        flex: 7,
        alignSelf: 'center',
        height: appLogoDimension,
        width: appLogoDimension
    },
    developerView : {
        flex: 4,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    termsView: {
        flex: 4,
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    }
})

=======
import React from 'react'
import { View, Text, StyleSheet } from "react-native"

const About = () => {
    return (
        <View style={styles.aboutView}>
            <Text>About</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    aboutView : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
export default About