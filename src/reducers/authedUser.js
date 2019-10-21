import { SET_AUTHED_USER, SIGN_OUT } from "../actions/authedUser";

export const authedUser = (state = {id:null}, action) => {

    switch(action.type){
        case SET_AUTHED_USER :
            return action.id
        case SIGN_OUT:
            return null
        default:
            return state
    }
}