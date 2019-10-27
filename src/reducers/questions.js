import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_QUESTION} from '../actions/questions'

export default function questions (state = {}, action){
    let questions = {}
    
    switch(action.type){
        case RECEIVE_QUESTIONS :
                questions = {
                ...state,
                ...action.questions
            }
            console.log("from questions reducer ", questions);
            return questions
        case ADD_QUESTION :
            const { question } = action

            return {
                ...state,
                [question.id]: question
            }
        case ANSWER_QUESTION:
            const { authedUser, qid, option} = action
            return{
                ...state,
                [qid]: {
                    ...state[qid],
                [option]: {
                    ...state[qid][option],
                    votes: state[qid][option].votes.concat([authedUser])
                }
            }
        }
        default:
            return state    
    }
    
}