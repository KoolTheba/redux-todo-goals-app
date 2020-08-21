// App code
const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOAL = 'ADD_GOAL'
const REMOVE_GOAL = 'REMOVE_GOAL'

function addTodoAction(todo){
    return{
        type: ADD_TODO,
        todo,
    }
}

function removeTodoAction(id){
    return {
        type: REMOVE_TODO,
        id,
    }
}

function toggleTodoAction(id){
    return {
        type: TOGGLE_TODO,
        id,
    }
}

function addGoalAction(goal){
    return {
        type: ADD_GOAL,
        goal,
    }
}

function removeGoalAction(id){
    return {
        type: REMOVE_GOAL,
        id,
    }
}

function todos (state = [], action) {
    switch(action.type){
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map(todo => todo.id !== action.id ? todo : 
                Object.assign({}, todo, {complete: !todo.complete})    
            )
        default:
            return state
    }
}

function goals (state = [], action){
    switch(action.type){
        case ADD_GOAL:
            return state.concat([action.goal])
        case REMOVE_GOAL:
            return state.filter(goal => goal.id !== action.id)
        default:
            return state
    }
}

const store = Redux.createStore(Redux.combineReducers({
    todos,
    goals,
}))

store.subscribe(() => {
    const { goals, todos } = store.getState()

    document.getElementById('todos').innerHTML = ''
    document.getElementById('goals').innerHTML = ''

    goals.forEach(addGoalToDOM)
    todos.forEach(addTodoToDOM)
})
