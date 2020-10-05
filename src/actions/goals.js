import API from 'todos-goals-api-localstorage'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal(goal){
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoal(id){
    return {
        type: REMOVE_GOAL,
        id,
    }
}

export function handleDeleteGoal (goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id))
        return API.deleteGoal((goal.id))
        .catch(() => {
            dispatch(addGoal(goal))
            alert('An error occurred. Try again!')
        })
    }
}

export function handleAddGoal (value, cb) {
    return (dispatch) => {
        return API.saveGoal(value)
        .then((goal) => {
            dispatch(addGoal(goal))
            cb()
        })
        .catch(() => alert('There was an error. Try again!'))
    }
}