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


class App extends Component {
  componentDidMount(){
// this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        {/* {this.props.loading === true 
        ? null
        : <Route exact path="/" component={SignIn}/>} */}
        {/* <Route exact path="/" component={SignIn}/>  */}
        <Route  path="/questionsList" component={QuestionsList}/>
        <NewQuestion />
        {/* <QuestionsList /> */}
        {/* <signIn /> */}
      </div>
    </BrowserRouter>







      // <BrowserRouter>
      // <div className='container'>
      // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   {/* <a className="navbar-brand" href="#">Would You Rather..?</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button> */}
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav">
      //       <li className="nav-item active">
      //         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/new_question">New Question</Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link" to="/leader_board">Leader Board</Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Log out</Link>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
      // <Route exact path="/" component={QuestionsList}/>
      // <Route  path="/new_question" component={NewQuestion}/>
      // <Route  path="/leader_board" component={LeaderBoard}/>
      // </div>
      // </BrowserRouter>
    )
  }
}

// function mapStateToProps ({ authedUser}) {
//   return {
//     loading: authedUser === null
//   }
// }

// export default connect(mapStateToProps)(App)

export default App


