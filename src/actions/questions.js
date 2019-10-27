import {saveQuestionAnswer, saveQuestion} from '../utils/api'
import {addUserQuestion, addAnswerToUser} from './users'

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

export function handleAddQuestion (optionOneText, optionTwoText){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then ((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(authedUser, question.id))

        }
        )
    }
}

export const addAnswerToQuestion = (authedUser, qid, option ) => {
    const action = { 
        type: ANSWER_QUESTION,
        authedUser,
        qid,
        option

    }
    return action
}

export function handleAnswer (qid, option){
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return saveQuestionAnswer({
            authedUser,
            qid,
            answer: option
        })
        .then (() => {
            dispatch(addAnswerToQuestion(authedUser, qid, option))
            dispatch(addAnswerToUser(authedUser, qid, option))

        }
        )
    }

}