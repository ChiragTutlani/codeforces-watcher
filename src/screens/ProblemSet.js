import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'
import * as Font from 'expo-font'
import * as WebBrowser from 'expo-web-browser'

import StatusBarView from '../components/StatusBarView'
import Heading from '../components/Heading'
import LoadingView from '../components/LoadingView'
import ProblemItem from '../components/ProblemItem'
import FailedView from '../components/FailedView'
import { CONTENT_BACKGROUND, HEADING_BACKGROUND_COLOR } from '../colorTheme'

import problemSetActionCreator from '../redux/actions/problemSetAction'

let updateProblemSetId = null

class ProblemSet extends React.Component{
    state = {
        fontLoaded: false,
    }

    async componentDidMount(){
        this.props.dispatch(problemSetActionCreator())
        await Font.loadAsync({
            'verdana' : require('../../assets/fonts/Verdana.ttf')
        })
        this.setState({ fontLoaded: true })
        updateProblemSetId = setInterval(()=>{
            let currentDate = new Date()
            let pastDate = this.props.problems.timeUpdated
            pastDate += 7200000 // 2 hour
            pastDate = new Date(pastDate)
            if(pastDate>currentDate){
                this.refresh()
            }
        },60*1000)
    }

    refresh = () => {
        this.props.dispatch(problemSetActionCreator())
    }

    onPress = async (id,index) => {
        const url = 'https://codeforces.com/problemset/problem/' + id + '/' + index
        const options = {
            toolbarColor : HEADING_BACKGROUND_COLOR,
            enableBarCollapsing: true,
        }
        await WebBrowser.openBrowserAsync(url, options)
    }

    componentWillUnmount(){
        clearInterval(updateProblemSetId)
    }

    render(){
        if(this.props.problems.status==='loading'){
            return <LoadingView
                    verdana={this.state.fontLoaded ? 'verdana' : ''} fontSize={32}
                    heading={'Problem Sets'} refresh={()=>this.refresh()} 
                    />
        }
        else if(this.props.problems.status==='ok'){
            return(
                <View style={style.problemSetView}>
                    <StatusBarView />
                    <View style={style.contentView}>
                        <Heading verdana={ this.state.fontLoaded ? 'verdana' : ''}
                            fontSize={32} heading='Problem Sets'
                            refresh={()=>this.refresh()}
                        />
                        <View style={style.problemView}>
                            <FlatList style={{flex:1}} data={this.props.problems.data.problems}
                                renderItem={({item})=>{
                                    return <ProblemItem
                                        key={`${item.contestId}_${item.index}`}
                                        question={item}
                                        onPress={()=>this.onPress(item.contestId,item.index)}
                                        verdana={ this.state.fontLoaded ? 'verdana' : ''}
                                    />
                                }}
                                keyExtractor={(item)=>`${item.contestId}_${item.index}`}
                            />
                        </View>
                    </View>
                </View>
            )
        }
        else{
<<<<<<< HEAD
            return <FailedView content={'Problem Sets'} verdana={this.state.fontLoaded?'verdana':''}
                refresh={()=>this.refresh()} heading={'Problem Sets'} fontSize={32}
            />
=======
            return <FailedView content={'Problem Sets'} verdana={this.state.fontLoaded?'verdana':''}/>
>>>>>>> f6791fac28dd532049bf3171c6efeddc06825d51
        }
    }
}

const style = StyleSheet.create({
    problemSetView : {
        flex: 1
    },
    contentView : {
        flex: 1
    },
    problemView: {
        flex:15,
        backgroundColor: CONTENT_BACKGROUND
    }
})

const mapStateToProps = state => ({
    problems: state.problemSet
})

export default connect(mapStateToProps)(ProblemSet)