export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION= 'ADD_USER_QUESTION'
export const ADD_USER_ANSWER= 'ADD_USER_ANSWER'

export const receiveUsers = (users) => {
    const action = {
        type: RECEIVE_USERS,
        users
    }
    console.log("receiveUsers ACTION is " +  JSON.stringify( action ) );
    return action
}

export const addUserQuestion = (authedUser, questionId) => {
    const action = {
        type: ADD_USER_QUESTION,
        authedUser,
        questionId
    }
    console.log("add user q ACTION is " +  JSON.stringify( action ) );
    return action
}

export const addAnswerToUser = (authedUser, qid, option) => {
    const action = {
        type: ADD_USER_ANSWER,
        authedUser,
        qid,
        option
    }
    console.log("add Answer To User ACTION is " +  JSON.stringify( action ) );
    return action
}
