// const action = {
//     type: 'ADD_TODO',
//     todo: {
//         id: 0,
//         name: 'Learn Redux',
//         complete: false
//     }
// }

// {
//     type: 'REMOVE_TODO',
//     id: 0
// }

// {
//     type: 'TOGGLE_TODO',
//     id: 0
// }

// Reducer function
function todos (state = [], action) {
    switch(action.type){
        case 'ADD_TODO':
            return state.concat([action.todo])
        case 'REMOVE_TODO':
            return state.filter(todo => todo.id !== action.id)
        case 'TOGGLE:TODO':
            return state.map(todo => todo.id !== action.id ? todo : 
                Object.assign({}, todo, {complete: !todo.complete})    
            )
        default:
            return state
    }
}

function createStore (reducer) {
    let state
    let listeners = []

    const getState = () => state

    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    const dispatch = (action) => {
        state = reducer(state, action)
        // updates all subscribers
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}