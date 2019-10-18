import {saveQuestionAnswer, saveQuestion} from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const  ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export const receiveQuestions = (questions) => {
    const action = {
        type: RECEIVE_QUESTIONS,
        questions
    }
    console.log("receiveQuestions ACTION is " + JSON.stringify(action));
    return action
}


export const addQuestion = ( question ) => {
    const action = { 
        type: ADD_QUESTION,
        question

    }
    return action
}

export function handleAddQuestion (optionOne, optionTwo ){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestion({
            optionOne,
            optionTwo,
            author: authedUser
        })
        .then ((question) => dispatch(addQuestion(question)))
    }

}