import React, { Component } from 'react'
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import NewQuestion from './components/NewQuestion'
import LeaderBoard from './components/LeaderBoard'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a className="navbar-brand" href="#">Would You Rather..?</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/new_question">New Question</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/leader_board">Leader Board</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Log out</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Route exact path="/" component={Home}/>
      <Route  path="/new_question" component={NewQuestion}/>
      <Route  path="/leader_board" component={LeaderBoard}/>

      </div>
      </BrowserRouter>
    )
  }
}

export default App



