import React, { Component } from 'react'
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'
import {Link} from 'react-router-dom'
import QuestionsList from './QuestionsList'
import { Redirect } from 'react-router-dom'


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
    handleSubmit=(e)=>{
        e.preventDefault()
        const {id} = this.state
        if (id !== ''){
            this.setState({
                id,
                isSignIn: true
            })            
            this.props.dispatch(setAuthedUser(id))
        }
    }
    render() {
        console.log("SIGNIN comp"+ JSON.stringify(this.props.userIds))
        console.log(this.state);
        const {users} = this.props
        const {isSignIn} = this.state

        if (isSignIn) {
            return <Redirect to='/questionslist'/>
        }

        return (
            <div className="CardColumns p-5 max-auto col-8">
                <div className="Card" style={{ width: '30rem', border: 'solid gray 1px' }} >
            <h3 className="card-header text-center">Welcome to the Would You Rather App!</h3>
            <div className="card-body">
                <p className="card-text text-center"
                >Please sign in to continue</p>
                <h4 className="card-title text-center">Sign In</h4>
                <br />
                <form onSubmit={this.handleSubmit} >
                <label>Please Select User</label>
                <select className="form-control" value={this.state.id} onChange={this.handleChange}>
                    <option value='' disabled>Select</option>
                    {this.props.userIds.map((user) =>
                    <option key={user} value={user}>{users[user].name}</option> )}
                </select>
                <br />
                <button className="btn btn-primary btn-block" type='submit' >Sign In</button>
                </form>
            </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = ({users}) => {  
    return {
    userIds:Object.keys(users),
    users
}}

export default connect(mapStateToProps)(SignIn)
