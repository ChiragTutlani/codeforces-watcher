import React from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import * as Font from 'expo-font'

import LoadingView from '../components/LoadingView'

import { retrieveKeyAsync, removeKeyAsync } from '../AsyncStorageMethods'
import yourUserHandleActionCreator from '../redux/actions/yourUserHandleAction'
import StatusBarView from '../components/StatusBarView'
import Heading from '../components/Heading'
import UserProfile from '../components/UserProfile'
import { CONTENT_BACKGROUND, ADD_CHANGE_HANDLE_BUTTON, BUTTON_TEXT, REMOVE_HANDLE_BUTTON } from '../colorTheme'
import CustomButton from '../components/CustomButton'
import changeInitialRouteActionCreator from '../redux/actions/changeInitialRouteAction'

class Me extends React.Component{
    state = {
        fontLoaded: false,
        userHandle: undefined,
        changeHandleText: '',
    }

    async componentDidMount(){
        const data = await retrieveKeyAsync('userHandle')
        if(data.status==='ok'){
            this.props.dispatch(yourUserHandleActionCreator( data.userHandle ))
        }
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        const userHandle = data.status==='ok' ? data.userHandle : undefined
        const changeHandleText = data.status==='ok' ? 'Change Account' : 'Add Account'
        this.setState({ 
            fontLoaded: true,
            userHandle: userHandle,
            changeHandleText: changeHandleText
        })
    }

    refresh = () => {
        this.props.dispatch(yourUserHandleActionCreator(this.state.userHandle))
    }

    addChangeAccount = async () => {
        const data = await removeKeyAsync('userHandle')
        if(data.status==='ok'){
            this.props.dispatch(changeInitialRouteActionCreator('Login'))
            this.props.navigation.navigate('Login') 
        }
    }

    removeHandle = async () => {
        const data = await removeKeyAsync('userHandle')
        if(data.status==='ok'){
            this.props.dispatch(changeInitialRouteActionCreator('Login'))
            this.setState({
                userHandle: undefined,
                changeHandleText: 'Add Account'
            })
        }
    }

    render(){
        const userHandleState = this.props.userHandle
        if(userHandleState.status==='loading'){
            return <LoadingView fontSize={32} heading={'My Profile'}
                verdana={this.state.fontLoaded ? 'verdana' : ''}
                refresh={()=>this.refresh()}
            />
        }
        else{
            return(
                <View style={{flex:1}}>
                    <StatusBarView/>
                    <Heading fontSize={32} heading={'My Profile'} refresh={()=>this.refresh()}
                            verdana={ this.state.fontLoaded ? 'verdana' : ''}
                    />
                    <View style={{flex:15,backgroundColor: CONTENT_BACKGROUND}}>
                        { this.state.userHandle!==undefined ? <View style={style.myProfileContainer}>
                            <UserProfile profileData={userHandleState.data}
                                verdana={this.state.fontLoaded ? 'verdana' : ''}
                                marginHorizontal={15} marginVertical={40}
                            />
                        </View> : null}
                        <View style={style.buttonView}>
                           <CustomButton onPress={()=>this.addChangeAccount()} 
                               disabled={false} color={ADD_CHANGE_HANDLE_BUTTON}
                               textColor={BUTTON_TEXT} text={this.state.changeHandleText}
                           />
                           <CustomButton onPress={()=>this.removeHandle()} 
                               disabled={false} color={REMOVE_HANDLE_BUTTON}
                               textColor={BUTTON_TEXT} text={'Remove Account'}
                           />
                        </View>
                    </View>
                </View>
            )
        }
    }
}

const style = StyleSheet.create({
    myProfileContainer : {
        flex: 1,
    },
    buttonView: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 20,
        justifyContent: 'space-around'
    }
})

const mapStateToProps = state => ({
    userHandle: state.yourUserHandle
})

export default connect(mapStateToProps)(Me)