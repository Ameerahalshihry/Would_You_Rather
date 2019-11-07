import React, { Component } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import {handleInitialData} from '../actions/shared'
import  QuestionsList  from './QuestionsList';
import LogOut from './LogOut'
import  QuestionPollResults  from './QuestionPollResults';
import AnsweringQuestion from './AnsweringQuestion'
import LogIn from './LogIn'
import Page404 from './Page404';

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
      <Switch>
          {
            this.props.notLogged 
            ? <Route exact path="/" component={LogIn}/>
            :
            <React.Fragment>
        <Route exact path="/" component={QuestionsList}/>
        <Route  path="/newquestion" component={NewQuestion}/>
        <Route  path="/leaderboard" component={LeaderBoard}/>
        <Route exact path="/questions/:id/results" component={QuestionPollResults}/>
        <Route exact path="/questions/:id" component={AnsweringQuestion}/>
        <Route  path="/logout" component={LogOut}/>
        </React.Fragment>
        }
        <Route component={Page404}/>
        <Redirect from='*' to="/error" />
          </Switch>
    </BrowserRouter>
    )
  }
}
const mapStateToProps = ({authedUser}) => {
return{
  notLogged: authedUser === null
}
}
export default connect(mapStateToProps)(App)



