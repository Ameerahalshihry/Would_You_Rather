import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Redirect } from 'react-router-dom'
import {signOut} from '../actions/authedUser'

export class LogOut extends Component {
    componentDidMount(){
        this.props.dispatch(signOut())
    }
    comp
    render() {
        return (
            <div>
                <Redirect to='/'/>
            </div>
        )
    }
}


export default connect()(LogOut)
