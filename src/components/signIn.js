import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Link} from 'react-router-dom'

class SignIn extends Component {
    state = {
        id:'',
        isSignIn:false
    }
    handleChange=(e)=>{
    this.setState(
        {
            id: e.target.value
        }
    )
    }
    handleClick=(e)=>{
        e.preventDefault()
        const {id} = this.state
        if (id !== ''){
            this.setState({
                id: id,
                isSignIn: true
            })
            this.props.setAuthedUser(id)
        }
    }
    render() {
        console.log("SIGNIN comp"+ JSON.stringify(this.props.userIds))
        console.log(this.state);
        
        return (
            <div className="card col-4 mx-auto">
            <h3 className="card-header text-center">Welcome to the Would You Rather App!</h3>
            <div className="card-body">
                <p className="card-text text-center">Please sign in to continue</p>
                <h4 className="card-title text-center">Sign In</h4>
                <br />
                <select className="form-control" onChange={this.handleChange}>
                    <option value='' disabled>Select</option>
                    {this.props.userIds.map((user) =>
                    <option key={user} value={user}>{this.props.users[user].name}</option> )}
                </select>
                <br />
                <Link to='/questionsList'>
                <button className="btn btn-primary btn-block" onClick={this.handleClick}>Sign In</button>
                </Link>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({users, authedUser}) => {  
    return {
    userIds:Object.keys(users),
    users,
    id:authedUser
}}



export default connect(mapStateToProps, {setAuthedUser})(SignIn)
