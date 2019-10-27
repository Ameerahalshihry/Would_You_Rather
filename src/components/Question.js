import React, { Component } from 'react'
import { connect } from 'react-redux'
import {formatQuestion} from '../utils/helper'
import {Image, Card, Button, CardColumns, Container} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom'

class Question extends Component {

    // state={
    //     id: this.props.id,
    
    // }
    // handleClick =(e) =>{
    //     if (this.props.isAnswered){
    //         return <Redirect to='/questionpollresults'/>
    //         }else
    //         {
    //         return <Redirect to='/answeringquestion'/>
    //         }
            
    // }
    
    render() {
            // if (this.props.isAnswered){
            // return <Redirect to='/questionpollresults'/>
            // }
        const {question} = this.props
        const {name, avatar, optionOne } = question
        console.log("WWWWWWw"+ this.props.id);
        // console.log("MMMMMMMFFFF"+ this.state.id);
        const {id} = this.props

        
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
                        {
                            this.props.isAnswered? 
                        <Link className="btn btn-primary btn-block" variant="primary" to={{pathname:'/questionpollresults', state:{id:id}}}>View Poll</Link>
                            :
                            <Link className="btn btn-primary btn-block" variant="primary" to={{pathname:'/answeringquestion', state:{id:id}}}>View Poll</Link>
                        }                    
                        {/* <Button className="btn btn-primary btn-block" variant="primary" onClick={this.handleClick}>View Poll</Button> */}

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
        question: formatQuestion(question, users[question.author], authedUser),
        id
    }
}

export default connect(mapStateToProps)(Question)
