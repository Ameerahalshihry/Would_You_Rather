import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helper'
import {Image, Card, Button, CardColumns, Container} from 'react-bootstrap'


class Question extends Component {
    
    render() {
        const {question} = this.props
        const {name, avatar, optionOne } = question
        // console.log("here the authedUser props" +this.props.authedUser);
        // console.log("here the question props" +JSON.stringify(this.props.question));
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
                        <Button variant="primary" block>View Poll</Button>
                    </Card.Body>
                    </Card>
                
                </CardColumns>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({authedUser, users, questions}, {id}) => {
    const question = questions[id]
    // const parentQuestion = questions[]
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser) 
    }
}

export default connect(mapStateToProps)(Question)
