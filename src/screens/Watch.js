import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import * as Font from 'expo-font'

import { connect } from 'react-redux'
import updateSearchUserActionCreator from '../redux/actions/updateSearchUserAction'
import removeSearchUserActionCreator from '../redux/actions/removeSearchUserAction'

import Heading from '../components/Heading'
import StatusBarView from '../components/StatusBarView'
import TextInputView from '../components/TextInputView'
import CustomButton from '../components/CustomButton'
import UserProfile from '../components/UserProfile'

import {retrieveKeyAsync} from '../AsyncStorageMethods'

import { 
    BUTTON_TEXT, CONTENT_BACKGROUND, 
    SEARCH_BUTTON_INACTIVE, SEARCH_BUTTON_ACTIVE, 
    SEARCH_BUTTON_REMOVE 
} from '../colorTheme'
import addWatchUserActionCreator from '../redux/actions/addWatchUserAction'

class Watch extends React.Component{
    state = {
        fontLoaded: false,
        disabled: true,
        searchColor: SEARCH_BUTTON_INACTIVE,
        searchField: '',
    }

    async componentDidMount(){
        const data = await retrieveKeyAsync('watchUsers')
        if(data.status==='ok'){
            //TODO: loop through the array and create action for every userHandle
        }
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        this.setState({ 
            fontLoaded: true,
        })
    }

    async componentWillUnmount(){
        // TODO: remove watchUser from redux and store all in AsyncStorage
    }

    refresh = () => {
        // TODO: loop through all userHandles present in redux and create actions
    }

    onChangeText = (userHandle) => {
        this.setState({
            searchField: userHandle,
            disabled: userHandle!=='' ? false:true,
            searchColor: userHandle!=='' ? SEARCH_BUTTON_ACTIVE:SEARCH_BUTTON_INACTIVE
        })
    }

    onSearch = () => {
        this.props.dispatch(addWatchUserActionCreator(this.state.searchField))
    }

    onRemove = (userHandle) => {
        this.props.dispatch(deleteWatchUserActionCreator(userHandle))
    }

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBarView />
                <Heading fontSize={32} heading={'Watch Users'}
                    verdana={'verdana'} refresh={()=>this.refresh()}
                />
                <View style={style.container}>
                    <View style={style.inputButton}>
                        <TextInputView onChangeText={(userHandle)=>this.onChangeText(userHandle)} />
                        <View style={style.buttons}>
                            <CustomButton disabled={this.state.disabled} color={this.state.searchColor}
                            onPress={()=>this.onSearch()} textColor={BUTTON_TEXT} text={'SEARCH'} />
                        </View>
                    </View>
                    <View style={style.profiles}>
                        {
                            this.props.watchUser!==undefined && this.props.watchUser.status==='ok' ?
                            ( <FlatList data={this.props.watchUser.data}
                                renderItem={((item) => <UserProfile verdana={'verdana'}
                                                        profileData={item} marginHorizontal={15} 
                                                        marginVertical={5} onPress={(item)=>this.onRemove(item.handle)}
                                                        disabled={false}
                                                        /> )}
                                keyExtractor={(item) => item.handle}
                            /> ) : null
                        }
                    </View>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex: 15,
        alignItems: 'center',
        justifyContent : 'center',
        backgroundColor: CONTENT_BACKGROUND
    },
    inputButton : {
        flex:3,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    profiles : {
        flex: 12,
    }
})

const mapStateToProps = state => ({
    watchUser : state.watchUser
})

export default connect(mapStateToProps)(Watch)