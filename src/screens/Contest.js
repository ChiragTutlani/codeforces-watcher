import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import * as Font from 'expo-font'
import * as WebBrowser from 'expo-web-browser'

import StatusBarView from '../components/StatusBarView'
import Heading from '../components/Heading'
import LoadingView from '../components/LoadingView'
import ContestItem from '../components/ContestItem'
import FailedView from '../components/FailedView'
import { CONTENT_BACKGROUND, HEADING_BACKGROUND_COLOR } from '../colorTheme'

import contestActionCreator from '../redux/actions/contestAction'

let updateContestId = null

class Contest extends React.Component{
    state = {
        fontLoaded: false,
    }

    async componentDidMount(){
        this.props.dispatch(contestActionCreator())
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        this.setState({ fontLoaded: true })
        updateContestId = setInterval(()=>{
            let currentDate = new Date()
            let pastDate = this.props.contest.timeUpdated
            pastDate += 7200000 // 2 hour
            pastDate = new Date(pastDate)
            if(pastDate>currentDate){
                this.refresh()
            }
        },60*1000)
    }

    refresh = () => {
        this.props.dispatch(contestActionCreator())
    }

    onStatus = async (id) => {
        const url = 'https://codeforces.com/contest/'+ id + '/status'
        const options = {
            toolbarColor : HEADING_BACKGROUND_COLOR,
            enableBarCollapsing: true,
        }
        await WebBrowser.openBrowserAsync(url, options)
    }

    onStandings = async (id) => {
        const url = 'https://codeforces.com/contest/'+ id + '/standings'
        const options = {
            toolbarColor : HEADING_BACKGROUND_COLOR,
            enableBarCollapsing: true,
        }
        await WebBrowser.openBrowserAsync(url, options)
    }

    componentWillUnmount(){
        clearInterval(updateContestId)
    }

    render(){
        if(this.props.contest.status==='loading'){
            return <LoadingView
                    verdana={this.state.fontLoaded ? 'verdana' : ''} fontSize={32}
                    heading={'Contests'} refresh={()=>this.refresh()} 
                    />
        }
        else if(this.props.contest.status==='ok'){
            return(
                <View style={style.contestAllView}>
                    <StatusBarView />
                    <View style={style.contentView}>
                        <Heading verdana={ this.state.fontLoaded ? 'verdana' : ''}
                            fontSize={32} heading='Contests'
                            refresh={()=>this.refresh()}
                        />
                        <View style={style.contestView}>
                            <FlatList style={{flex:1}} data={this.props.contest.data}
                                renderItem={({item})=>{
                                    return <ContestItem
                                        key={item.id.toString()}
                                        contestDescription={item}
                                        onStatus={()=>this.onStatus(item.id)}
                                        onStandings={()=>this.onStandings(item.id)}
                                        verdana={ this.state.fontLoaded ? 'verdana' : ''}
                                    />
                                }}
                                keyExtractor={(item)=>item.id.toString()}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        else{
            return <FailedView content={'Contest'} verdana={this.state.fontLoaded?'verdana':''}
                fontSize={32} refresh={()=>this.refresh()} heading={'Contest'}
            />
        }
    }
}

const style = StyleSheet.create({
    contestAllView : {
        flex: 1
    },
    contentView : {
        flex: 1
    },
    contestView: {
        flex:15,
        backgroundColor: CONTENT_BACKGROUND
    }
})

const mapStateToProps = state => ({
    contest: state.contest
})

export default connect(mapStateToProps)(Contest)