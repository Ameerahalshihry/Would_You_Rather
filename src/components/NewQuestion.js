import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleAddQuestion} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Navbar from './Navbar'
import {Form, Card, Button, CardColumns, Container} from 'react-bootstrap'


class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo:'',
        isAdded: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = (e) => {
    e.preventDefault()
    const {optionOne, optionTwo} = this.state
    const {dispatch} = this.props

    dispatch(handleAddQuestion(optionOne, optionTwo))    
    this.setState({
        optionOne: '',
        optionTwo: '',
        isAdded: true
    });//reset input fields to empty

    }
    render() {
        const {optionOne, optionTwo, isAdded} = this.state
        if (isAdded) {
            return <Redirect to='/questionslist'/>
        }        
        return (
        <Container>
        <Navbar />             
        {/* <div className="card col-4 mx-auto"> */}
        <CardColumns class="card p-5 ">
                <Card className="text-center" style={{ width: '30rem' }}  >
                <Card.Header>New Question</Card.Header>
                    <Card.Body>
                    <p>Complete the question:</p>
                        <Card.Title>Would You Rather ..</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                        <Card.Text>
                        <input className="form-control" type="text" name="optionOne" placeholder="Enter Option One Text Here" value={optionOne} onChange={this.handleChange}/>
                        <br />
                        <p className="card-text text-center">OR</p>
                        <input className="form-control" type="text" name="optionTwo" placeholder="Enter Option Two Text Here" value={optionTwo} onChange={this.handleChange}/>
                        <br />
                        </Card.Text>
                        <Button className="btn btn-primary btn-block" variant="primary" type="submit" disabled={optionOne === '' || optionTwo === ''} >Submit</Button>
                        </Form>
                        </Card.Body>
                </Card>
        </CardColumns>
            </Container>   
        )
    }
}


export default connect()(NewQuestion)
