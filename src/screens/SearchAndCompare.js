import React from 'react'
import { View, StyleSheet, ScrollView,Text } from 'react-native'
import * as Font from 'expo-font'

import { connect } from 'react-redux'
import updateSearchUserActionCreator from '../redux/actions/updateSearchUserAction'
import removeSearchUserActionCreator from '../redux/actions/removeSearchUserAction'

import Heading from '../components/Heading'
import StatusBarView from '../components/StatusBarView'
import TextInputView from '../components/TextInputView'
import CustomButton from '../components/CustomButton'
import UserProfile from '../components/UserProfile'

import { 
    BUTTON_TEXT, CONTENT_BACKGROUND, 
    SEARCH_BUTTON_INACTIVE, SEARCH_BUTTON_ACTIVE, 
    SEARCH_BUTTON_REMOVE, LIST_ITEM_BACKGROUND
} from '../colorTheme'

class SearchAndCompare extends React.Component{
    state = {
        fontLoaded: false,
        disabled: true,
        searchColor: SEARCH_BUTTON_INACTIVE,
        searchField: '',
    }

    async componentDidMount(){
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        this.setState({ 
            fontLoaded: true,
        })
    }

    refresh = () => {
        this.onSearch()
    }

    onChangeText = (userHandle) => {
        this.setState({
            searchField: userHandle,
            disabled: userHandle!=='' ? false:true,
            searchColor: userHandle!=='' ? SEARCH_BUTTON_ACTIVE:SEARCH_BUTTON_INACTIVE
        })
    }

    onSearch = () => {
        if(this.state.searchField!==""){
            this.props.dispatch(updateSearchUserActionCreator(this.state.searchField))
        }
    }

    onRemove = () => {
        this.props.dispatch(removeSearchUserActionCreator())
    }

    render(){
        console.log(this.props.searchUser)
        return(
            <View style={{flex:1}}>
                <StatusBarView />
                <Heading fontSize={32} heading={'Search User'}
                    verdana={'verdana'} refresh={()=>this.refresh()}
                />
                <View style={style.container}>
                    <View style={style.inputButton}>
                        <TextInputView style={{marginHorizontal:10}} onChangeText={(userHandle)=>this.onChangeText(userHandle)} />
                        <View style={style.buttons}>
                            <CustomButton disabled={this.state.disabled} color={this.state.searchColor}
                            onPress={()=>this.onSearch()} textColor={BUTTON_TEXT} text={'SEARCH'} />
                            <CustomButton disabled={false} color={SEARCH_BUTTON_REMOVE}
                            onPress={()=>this.onRemove()} textColor={BUTTON_TEXT} text={'REMOVE'} />
                        </View>
                    </View>
                    <View style={style.profile}>
                        {
                            this.props.searchUser.status==='ok' ?
                            <UserProfile profileData={this.props.searchUser.data} verdana={'verdana'}
                                marginHorizontal={15} marginVertical={10} /> : 
                            this.props.searchUser.status==='failed' ? 
                            <View style={{flex:15, backgroundColor: CONTENT_BACKGROUND, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{backgroundColor: LIST_ITEM_BACKGROUND, paddingHorizontal: 10, paddingVertical:10, borderRadius:10}}>
                                    Try with different user handle
                                </Text>
                            </View> : null
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
        flex:2,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    profile : {
        flex: 12,
    }
})

const mapStateToProps = state => ({
    searchUser : state.searchUser
})

export default connect(mapStateToProps)(SearchAndCompare)