export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
    const action = {
        type: RECEIVE_USERS,
        users
    }
    console.log("receiveUsers ACTION is " +  JSON.stringify( action ) );
    return action
}


// export function receiveUsers () {
//     return {
//         type: RECEIVE_USERS,
//         users,
//     }
// }