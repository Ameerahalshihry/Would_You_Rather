import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import {handleInitialData} from '../actions/shared'
import  QuestionsList  from './QuestionsList';
import  SignIn  from './SignIn';
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
        <Route exact path="/" component={SignIn}/> 
        <Route exact path="/questions" component={QuestionsList}/>
        <Route  path="/newquestion" component={NewQuestion}/>
        <Route  path="/leaderboard" component={LeaderBoard}/>
        <Route  exact path="/questions/:id/results" component={QuestionPollResults}/>
        <Route  exact path="/questions/:id" component={AnsweringQuestion}/>
        <Route  path="/logout" component={LogOut}/>
      </div>
    </BrowserRouter>
    )
  }
}

export default connect()(App)



