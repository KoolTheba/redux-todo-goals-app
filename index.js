// const action = {
//     type: 'ADD_TODO',
//     todo: {
//         id: 0,
//         name: 'Learn Redux',
//         complete: false
//     }
// }

// Reducer function
function todos (state = [], action) {
    if(action.type === 'ADD_TODO'){
        return state.concat([action.todo])
    }
    return state
}

function createStore () {
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
        state = todos(state, action)
        // updates all subscribers
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}