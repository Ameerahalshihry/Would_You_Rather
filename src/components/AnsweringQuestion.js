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
        const {question, authedUser, qid, author, page404 } = this.props
        if (page404 === true){
        return <Redirect to ='/error'/>
        }
        if (this.state.isAnswered){
            return <Redirect to='/questions'/>

        }        
        return (
            <Container>
            <Navbar />
            <CardColumns className="card p-5 ">
                <Card className="text-center" style={{ width: '30rem' }}  >
                <Card.Header>{author.name} asks:</Card.Header>
                    <Card.Body>
                    <Image variant="left" src={author.avatarURL}  style={{ width: '8rem' }} roundedCircle/>

                        <Card.Title>Would You Rather ..</Card.Title>
                        <Form onSubmit={this.handleSubmit}>
                        <Card.Text>
                            <div>
                            <input className="form-check-input"
                            type="radio"
                            name="answerQuestion"
                            id='optionOne'
                            value="optionOne"
                            onChange={this.handleChange}/>
                            <label>{question.optionOne.text}</label>
                            </div>
                            <div>
                            <input className="form-check-input"
                            type="radio"
                            name="answerQuestion"
                            id='optionTwo'
                            value="optionTwo"
                            onChange={this.handleChange}/>
                            <label>{question.optionTwo.text}</label>
                            </div>
                        </Card.Text> 
                        <Button className="btn btn-primary btn-block" variant="primary" type='submit' disabled={this.state.option === ''} >Submit</Button>
                        </Form>
                        </Card.Body>
                    </Card>
                
                </CardColumns>
                </Container>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}, ownProps) => {
    const qid = ownProps.history.location.state.id
    let question = ''
    let author =''
    let page404 = true
    if (qid !== undefined){
        question = questions[qid]
        author=users[question.author]
        page404= false
    }
    return {
        question,
        authedUser,
        qid,
        page404,
        author
    }     
}
export default connect(mapStateToProps)(AnsweringQuestion)
