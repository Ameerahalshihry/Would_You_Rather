import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from "prop-types"
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import  QuestionsList  from './QuestionsList';
import {Image} from 'react-bootstrap'




class Navbar extends Component {

    render() {
        const {user} = this.props
        console.log(this.props.user)
        console.log(this.props.authedUser)
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <h3 className="navbar-brand" >Would You Rather..?</h3>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active" id='questionslist'>
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" id='newquestion'>
                        <Link className="nav-link" to="/newquestion">New Question</Link>
                    </li>
                    <li className="nav-item" id='leaderboard'>
                        <Link className="nav-link" to="/leaderboard">Leader Board</Link>
                    </li>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 ">
                    <ul className="navbar-nav ml-auto">

                    <span className='navbar-text text-primary'>Hello {user.name}</span>
                    {/* show user name and avatar */}
                    <span></span>
                    <Image src={user.avatarURL} className='avatar' alt='' style={{ width: '4rem'}} roundedCircle/>
                    <li className="nav-item" id='logout' >
                    <Link className="nav-link" to="/logout" >Log out</Link>
                    </li>
                    </ul>
                    </div>
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps ({users, authedUser}) {
    const user = users[authedUser]
    return { 
        user,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Navbar)
