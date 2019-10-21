export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION= 'ADD_USER_QUESTION'

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


// export function receiveUsers () {
//     return {
//         type: RECEIVE_USERS,
//         users,
//     }
// }