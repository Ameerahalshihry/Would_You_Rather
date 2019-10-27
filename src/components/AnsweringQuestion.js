import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Image, Card, Button, CardColumns, Container, Form} from 'react-bootstrap'
import {formatQuestion} from '../utils/helper'
import Navbar from './Navbar'
import {handleAnswer} from '../actions/questions'
import { Redirect } from 'react-router-dom'
import { Radio, RadioGroup} from 'react-radio-group'
import Page404 from './Page404'

class AnsweringQuestion extends Component {
    state = {
        option: '',
        isAnswered: false
    }

    handleChange= (e) => {
        this.setState({
            option: e.target.value
        })


        console.log(this.state);
        
    }
    
    handleSubmit = (e) =>{
    e.preventDefault()
    const { option }= this.state
    const {qid} = this.props
    console.log(option);
    console.log(qid);

        this.props.dispatch(handleAnswer(qid, option))    
        this.setState({
        isAnswered: true,
    })
}
    render() {
        if (this.state.isAnswered){
            return <Redirect to='/questionslist'/>

        }
        const {questionDetails} = this.props
        const {name, avatar, optionOne, optionTwo } = questionDetails
        const {question, authedUser} = this.props
        return (
            <Container>
            <Navbar />
            { question ? (
            <CardColumns class="card p-5 ">
                <Card className="text-center" style={{ width: '30rem' }}  >
                <Card.Header>{name} asks:</Card.Header>
                    <Card.Body>
                    <Image variant="left" src={avatar}  style={{ width: '8rem' }} roundedCircle/>

                        <Card.Title>Would You Rather ..</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                        <Card.Text>
                        {/* <Form.Check
                            type="radio"
                            name="group1"
                            label={optionOne}
                            id='radio1'
                            value="optionOne"
                            onCheck={this.handleCheckOption}/>
                            <Form.Check
                            type="radio"
                            name="group1"
                            label={optionTwo}
                            id='radio2'
                            value="optionTwo"
                            onCheck={this.handleCheckOption}/> */}
                            <div>
                            <input className="form-check-input"
                            type="radio"
                            name="answerQuestion"
                            id='optionOne'
                            value="optionOne"
                            onChange={this.handleChange}/>
                            <label>{optionOne}</label>
                            </div>
                            <div>
                            <input className="form-check-input"
                            type="radio"
                            name="answerQuestion"
                            id='optionTwo'
                            value="optionTwo"
                            onChange={this.handleChange}/>
                            <label>{optionTwo}</label>
                            </div>
                        </Card.Text> 
                        <Button className="btn btn-primary btn-block" variant="primary" type='submit' disabled={this.state.option === ''} >Submit</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                
                </CardColumns>)
                : <Page404 />}
                </Container>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}, ownProps) => {
    const qid = ownProps.history.location.state.id
    const question = questions[qid]

    return {
        questionDetails: formatQuestion(question, users[question.author], authedUser),
        question,
        authedUser,
        qid
    }
        
}
export default connect(mapStateToProps)(AnsweringQuestion)
