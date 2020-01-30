import React from 'react'
import { View, StyleSheet} from 'react-native'
import * as Font from 'expo-font'
import {connect} from 'react-redux'

import { BACKGROUND, SUBMIT_BUTTON_INACTIVE, SUBMIT_BUTTON_ACTIVE, BUTTON_TEXT, SKIP_BUTTON, ACCENT_COLOR } from '../colorTheme'
import yourUserHandleActionCreator from '../redux/actions/yourUserHandleAction'
import { storeKeyAsync, retrieveKeyAsync } from '../AsyncStorageMethods'
import CodeforcesTitle from '../components/CodeforcesTitle'
import TextInputView from '../components/TextInputView'
import CustomButton from '../components/CustomButton'
import DeveloperView from '../components/DeveloperView'
import StatusBarView from '../components/StatusBarView'

class LoginScreen extends React.Component{
    state = {
        userHandle : '',
        disabled : true,
        submitColor: SUBMIT_BUTTON_INACTIVE,
        fontLoaded: false,
<<<<<<< HEAD
    }

    
    checkFirstTime = async () => {
        const data = await retrieveKeyAsync('usedBefore')
        if(data.status!=='ok'){
            return true
        }
        return false
=======
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
    }

    async componentDidMount(){
        this.mounted = true
        const data = await retrieveKeyAsync('userHandle')
        if(data.status==='ok'){
            this.navigateHome()
        }
        if(this.mounted){
            await Font.loadAsync({
                'verdana' : require('../../assets/fonts/Verdana.ttf')
            })
            this.setState({ fontLoaded: true })
        }
    }

    componentWillUnmount(){
        this.mounted = false
    }
       
    handleChange = (text) => {
        this.setState({
            userHandle: text,
            disabled: text==='',
            submitColor: text==='' ? SUBMIT_BUTTON_INACTIVE : SUBMIT_BUTTON_ACTIVE
        })
    }

    submitUserHandle = () => {
        this.props.dispatch(yourUserHandleActionCreator(this.state.userHandle))
        storeKeyAsync('userHandle', this.state.userHandle)
        this.navigateHome()
    }

    navigateHome = () => {
        this.props.navigation.navigate('Home')
    }

    render(){
        return(
            <View style={styles.loginScreenView}>
                <StatusBarView/>
                    <View style={styles.loginView}>
                        <CodeforcesTitle
                            fontLoaded={this.state.fontLoaded}
                        />
                        <TextInputView 
                            onChangeText={(text)=>this.handleChange(text)}
                        />
                        <View style={styles.buttonView}>
                            <CustomButton 
                                disabled={this.state.disabled}
                                onPress={()=>this.submitUserHandle()}
                                color={this.state.submitColor}
                                text='SUBMIT'
                                textColor={BUTTON_TEXT}
                            />
                            <CustomButton 
                                disabled={false}
                                onPress={()=>this.navigateHome()}
                                color={SKIP_BUTTON}
                                text='SKIP'
                                textColor={BUTTON_TEXT}
                            />
                        </View>
                    </View>
                <DeveloperView/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginScreenView: {
        flex: 1
    },
    loginView : {
        flex: 13,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BACKGROUND
    },
    buttonView: {
        flex: 6,
        justifyContent: 'space-evenly',
    }
})

export default connect()(LoginScreen)