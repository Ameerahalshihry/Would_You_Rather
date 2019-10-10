import React, { Component } from 'react'
import { connect } from 'react-redux'

export class NewQuestion extends Component {
    render() {
        return (
                        
        <div className="card">
            <h3 className="card-header text-center">Create New Question</h3>
            <div className="card-body">
                <p className="card-text">Complete the question:</p>
                <h5 className="card-title">Would you rather ...</h5>
                <input className="form-control" type="text" placeholder="Enter Option One Text Here"/>
                <br />
                <p className="card-text text-center">OR</p>
                <input className="form-control" type="text" placeholder="Enter Option Two Text Here"/>
                <br />
                <a href="#" className="btn btn-primary btn-block">Submit</a>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
