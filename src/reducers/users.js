import { RECEIVE_USERS } from '../actions/users'

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
        default:
            return state    
    }
    
}