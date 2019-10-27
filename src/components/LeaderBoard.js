import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Image, Card, CardColumns, Container} from 'react-bootstrap'
import Navbar from './Navbar'
const LeaderBoard  =(props) => {
    
    const {users} = props;
    const usersIds = Object.keys(users)

    let usersDetails= usersIds.map((user) => {
        let numOfAnswers = Object.entries(users[user].answers).length
        let numOfQuestions = users[user].questions.length
        let score = numOfAnswers + numOfQuestions
        let name = users[user].name
        let avatar = users[user].avatarURL
                return {
                    numOfAnswers,
                    numOfQuestions,
                    score,
                    name,
                    avatar
                }
                })

    const usersSorted = usersDetails.sort((a,b) => a.score - b.score).reverse()
    
        return (
        <div> 
        <Navbar />
        {/* <div class="card p-5 col-4 mx-auto ">  */}

    {usersSorted.map((user) => (
    <CardColumns class="card p-5 ">
        <Card className="text-center" style={{ width: '30rem' }}  >
            <Card.Header  style={{"font-size":"20px"}}>{user.name}</Card.Header> 
                <Card.Body>
                    <Image variant="left" src={user.avatar}  style={{ width: '8rem'}} roundedCircle/>
                    <br/><br/>
                    <Card.Title> score: {user.score}</Card.Title>
                    <hr/>
                        <Card.Text>
                        Answered Questions: {user.numOfAnswers}
                        <hr/>
                        Created Questions: {user.numOfQuestions}
                        </Card.Text>
                </Card.Body>
        </Card>         
    </CardColumns>
    ))}
    {/* </div>  */}
    </div> 
        )
    }

const mapStateToProps = ({users}) => {
    return{
        users
        }
}
export default connect(mapStateToProps)(LeaderBoard)
