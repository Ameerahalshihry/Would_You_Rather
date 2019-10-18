import { combineReducers } from 'redux'
import users from './users'
import questions from './questions'
import {authedUser} from './authedUser'

const reducer=combineReducers({
    authedUser,
    questions,
    users
})

export default reducer