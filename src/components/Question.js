import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helper'
import {Image, Card, Button, CardColumns, Container} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

class Question extends Component {
    
    render() {
        
        const {question} = this.props
        const {name, avatar, optionOne } = question
        const {id, page404} = this.props
        if (page404 === true){
            // return <Page404 />
        return <Redirect to ='/error'/>
        }
        return (
            <div className="question">
            <Container>
            <CardColumns>
                <Card className="text-center" style={{ width: '30rem' }}  >
                <Card.Header>{name} asks:</Card.Header>
                    <Card.Body>
                    <Image variant="left" src={avatar}  style={{ width: '8rem' }} roundedCircle/>

                        <Card.Title>Would You Rather ..</Card.Title>
                        <Card.Text>
                        ...{optionOne}...
                        </Card.Text>
                        {
                            this.props.isAnswered? 
                        <Link className="btn btn-primary btn-block" variant="primary" to={{pathname:`/questions/${id}/results`, state:{id:id}}}>View Poll</Link>
                            :
                        <Link className="btn btn-primary btn-block" variant="primary" to={{pathname:`/questions/${id}`, state:{id:id}}}>View Poll</Link>
                        }                   
                        </Card.Body>
                    </Card>
                </CardColumns>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, {id}) => {
    // const question = questions[id]
    let question = ''
    let author =''
    let page404 = true
    if ( id !== undefined){
        question = questions[id]
        author=users[question.author]
        page404= false
    }
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser),
        id,
        page404
    }
}

export default connect(mapStateToProps)(Question)
