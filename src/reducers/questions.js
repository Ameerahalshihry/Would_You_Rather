import { RECEIVE_QUESTIONS, ADD_QUESTION} from '../actions/questions'

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
            const {question} = action

            return {
                ...state,
                [action.question.id]: action.question
            }
        default:
            return state    
    }
    
}