import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Image, Card, Button, CardColumns, Container, ListGroup, ProgressBar, Alert} from 'react-bootstrap'
import Navbar from './Navbar'
import {formatQuestion} from '../utils/helper'
import { IoIosCheckmarkCircle } from "react-icons/io";

export class QuestionPollResults extends Component {
    // state = {
    //     isVoted : false
    // }
    // componentWillMount(){
    //     const {question, authedUser} = this.props
    //     const {isVoted} = this.state


    //     if (question.optionOne.votes.includes(authedUser))
    //     {
    //         this.setState({isVoted: true})
    //         console.log(isVoted + "YEEESOP1");
            
    //     }
    //     if (question.optionTwo.votes.includes(authedUser))
    //     {
    //         this.setState({isVoted: true})
    //         console.log(isVoted + "YEEESOP2");
            
    //     }
    // }
    render() {
        console.log("RRRRRR"+ this.props.location.state.id);
        const {questionDetails} = this.props
        const {name, avatar, optionOne, optionTwo } = questionDetails
        const {question, authedUser} = this.props
        const numOfVotesOpthionOne= question.optionOne.votes.length
        const numOfVotesOpthionTwo= question.optionTwo.votes.length
        const totalVotes = numOfVotesOpthionOne + numOfVotesOpthionTwo
        const optionOnePerecent= numOfVotesOpthionOne /totalVotes * 100
        const optionTwoPerecent= numOfVotesOpthionTwo /totalVotes * 100
        // const {isVoted} = this.state
        const isOptionOneVoted = question.optionOne.votes.includes(authedUser)
        const isOptionTwoVoted = question.optionTwo.votes.includes(authedUser)

        console.log(isOptionOneVoted);
        console.log(isOptionTwoVoted);
        
        
        console.log(numOfVotesOpthionOne);
        console.log(numOfVotesOpthionTwo);
        return (
            <Container>
                <Navbar />
            <CardColumns>
                <Card className="text-center" style={{ width: '30rem' }}  >
                <Card.Header>{name} asks:</Card.Header>
                    <Card.Body>
                    <Image variant="left" src={avatar}  style={{ width: '8rem' }} roundedCircle/>
                        <h3>Results:</h3>
                        <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Card.Title>Would you rather {optionOne} ?</Card.Title>
                        <Card.Text>
                        {isOptionOneVoted?(
                            <span class="badge badge-light">
                                Your Vote
                            <IoIosCheckmarkCircle style={{color: 'blue'}} size={40} />
                            </span>
                        ): ''}
                        {/* <ProgressBar animated now={45} label={`${45}%`} style={{ width: 400, height: 30 }} /> */}
                        <br/><br/>
                        <ProgressBar animated now={optionOnePerecent} label={`${optionOnePerecent}%`} style={{ width: 400, height: 30 }} />

                        <br/>
                        <Alert  variant='secondary' >
                        {numOfVotesOpthionOne} out of {totalVotes}
                        </Alert>
                        </Card.Text>
                        </ListGroup.Item>


                        <ListGroup.Item>
                        <Card.Title>Would you rather {optionTwo} ?</Card.Title>
                        <Card.Text>
                        {isOptionTwoVoted?(
                            <span class="badge badge-light">
                                Your Vote
                            <IoIosCheckmarkCircle style={{color: 'blue'}} size={40} />
                            </span>
                        ): ''}
                        <br/><br/> 
                        <ProgressBar animated now={optionTwoPerecent} label={`${optionTwoPerecent}%`} style={{ width: 400, height: 30 }}/>
                        <br/>
                        <Alert  variant='secondary' >
                        {numOfVotesOpthionTwo} out of {totalVotes}
                        </Alert>
                        </Card.Text>
                        </ListGroup.Item>
                        </ListGroup>
                        
                        </Card.Body>
                    </Card>
                </CardColumns>
                </Container>
        )
    }
}

const mapStateToProps = ({authedUser, questions, users}, ownProps) => {
    const questionId = ownProps.history.location.state.id
    const question = questions[questionId]
    
    return {
        questionDetails: formatQuestion(question, users[question.author], authedUser),
        question,
        authedUser
    }
        
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPollResults)
