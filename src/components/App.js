import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import {handleInitialData} from '../actions/shared'
import  QuestionsList  from './QuestionsList';
import  SignIn  from './SignIn';
import Question from './Question'
import Navbar from './Navbar'
import LogOut from './LogOut'
import  QuestionPollResults  from './QuestionPollResults';
import AnsweringQuestion from './AnsweringQuestion'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
      <div className= 'container'>
        {/* {this.props.loading === true 
        ? null
        : <Route exact path="/" component={SignIn}/>} */}
        <Route exact path="/" component={SignIn}/> 
        <Route  path="/questionslist" component={QuestionsList}/>
        <Route  path="/newquestion" component={NewQuestion}/>
        {/* <Route  path="/question/:id" component={Question}/> */}
        <Route  path="/leaderboard" component={LeaderBoard}/>
        <Route  path="/questionpollresults" component={QuestionPollResults}/>
        <Route  path="/answeringquestion" component={AnsweringQuestion}/>
        <Route  path="/logout" component={LogOut}/>
        {/* test nav bar */}
        {/* <Route  path="/navbar" component={Navbar}/> */}


        {/* <NewQuestion /> */}
        {/* <QuestionsList /> */}
        {/* <signIn /> */}
      </div>
    </BrowserRouter>
    )
  }
}

// function mapStateToProps ({ authedUser}) {
//   return {
//     loading: authedUser === null
//   }
// }

export default connect()(App)



