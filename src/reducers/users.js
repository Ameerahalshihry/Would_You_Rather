import { RECEIVE_USERS, ADD_USER_QUESTION } from '../actions/users'

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
                return {
                    ...state,
                    [action.authedUser]:{
                        ...state[action.authedUser],
                        questions: state[action.authedUser].questions.concat([action.questionId])
                    }
                }
        default:
            return state    
    }
    
}