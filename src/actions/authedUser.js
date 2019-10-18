export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SIGN_OUT = 'SIGN_OUT'

export  const setAuthedUser = (id) =>{
    const action = {
        type: SET_AUTHED_USER,
        id
    }
    console.log("setAuthedUser ACTION is ", action);
    return action
    
}

export function signOut(id) {
    return {
        type: SIGN_OUT,
        id
    }
}