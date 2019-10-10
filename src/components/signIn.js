import React, { Component } from 'react'
import { connect } from 'react-redux'

export class signIn extends Component {
    render() {
        return (
            <div className="card">
            <h3 className="card-header text-center">Welcome to the Would You Rather App!</h3>
            <div className="card-body">
                <p className="card-text text-center">Please sign in to continue</p>
                <h4 className="card-title text-center">Sign In</h4>
                <br />
                <select class="form-control">
                    <option>Default select</option>
                </select>
                <br />
                <a href="#" className="btn btn-primary btn-block">Sign In</a>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(signIn)
