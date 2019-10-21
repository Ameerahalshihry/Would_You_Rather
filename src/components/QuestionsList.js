import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'
import {Tabs, Tab} from 'react-bootstrap'
import Navbar from './Navbar'


 class QuestionsList extends Component {
    render() {
        console.log(this.props);

        return (
            <div>
            <Navbar />
                <Tabs defaultActiveKey="Unanswered Questions" id="uncontrolled-tab-example">
                    <Tab eventKey="Unanswered Questions" title="Unanswered Questions" >
                    {this.props.unansweredQuestions.map((id)=>(
                            <Question id={id} key={id} unansweredQuestions={this.props.unansweredQuestions}/>
                        ))}
                    </Tab>
                    <Tab eventKey="Answered Questions" title="Answered Questions">
                    {this.props.answeredQuestions.map((id)=>(
                            <Question id={id} key={id} answeredQuestions={this.props.answeredQuestions} />
                        ))}
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = ({questions,users, authedUser}) => {  
    const user = users[authedUser]
    const answeredQuestions= Object.keys(user.answers)
    const unansweredQuestions= user.questions.filter(questionId => !answeredQuestions.includes(questionId))
    
    return {
    questionIds: Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions,
    unansweredQuestions
}}

export default connect(mapStateToProps)(QuestionsList)
