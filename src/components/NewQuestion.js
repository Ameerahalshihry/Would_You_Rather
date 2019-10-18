import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'

export class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    handleSubmit = (e) => {
    e.preventDefault()
    const {optionOne} = this.state
    const {optionTwo} = this.state
    const {dispatch} = this.props

    dispatch(handleAddQuestion(optionOne,optionTwo ))

    console.log('op1 is '+ optionOne + 'op2 is '+ optionTwo);
    //todo: Add question to store
    
    this.setState({
        [e.target.name]:''
    });//reset input fields to empty

    }
    render() {
        const {optionOne} = this.state
        const {optionTwo} = this.state
        {/*todo:Redirect to/ if submitted*/}
        return (
                        
        <div className="card col-4 mx-auto">
            <h3 className="card-header text-center">Create New Question</h3>
            <div className="card-body">
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">        
                <p className="card-text">Complete the question:</p>
                <h5 className="card-title">Would you rather ...</h5>
                <input className="form-control" type="optionOne" name="optionOne" placeholder="Enter Option One Text Here" value={optionOne} onChange={this.handleChange}/>
                <br />
                </div>
                <p className="card-text text-center">OR</p>
                <div className="form-group">        
                <input className="form-control" type="optionTwo" name="optionTwo" placeholder="Enter Option Two Text Here" value={optionTwo} onChange={this.handleChange}/>
                <br />
                </div>
                <button  type="submit" className="btn btn-primary btn-block" disabled={optionOne === '' || optionTwo === ''} >Submit</button>
            </form>
            </div>
            </div>
        )
    }
}



export default connect()(NewQuestion)
