import { RECEIVE_USERS, ADD_USER_QUESTION, ADD_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action){
    let users = {}
    
    switch(action.type){
        case RECEIVE_USERS :
            users = {
                ...state,
                ...action.users
            }
            console.log("from users reducer ", users);
            return users
        case ADD_USER_QUESTION :
                    const {authedUser, questionId} = action
                return {
                    ...state,
                    [authedUser]:{
                        ...state[authedUser],
                        questions: state[authedUser].questions.concat([questionId])
                    }
                }
        case ADD_USER_ANSWER :
            const {option, qid} = action
            return {
                ...state,
                [action.authedUser] : {
                    ...state[action.authedUser],
                    answers:{
                        ...state[action.authedUser].answers,
                        [qid]: option
                    }
                }

            }
        default:
            return state    
    }
    
}