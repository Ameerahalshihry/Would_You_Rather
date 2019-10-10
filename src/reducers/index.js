import action from '../actions/index'

export const reducer = (state =[], action) =>
{
    if (action.type === 'ADD'){
        return state
    }
    return state
}