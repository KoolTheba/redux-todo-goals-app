import todos from './todos'
import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO
} from '../actions/todos'
import { RECEIVE_DATA } from '../actions/shared'

const state = []

const fixtures = {
    emptyAction: "",
    addTodoAction: {
        "todo": "Daily cook",
        "type": ADD_TODO
    },
    removeTodoAction: {
        "todo": "Buy groceries",
        "type": REMOVE_TODO
    },
    toggleTodoAction: {
        "id" : "qkzp8zqdl1",
        "type": TOGGLE_TODO
    },
    receiveTodosAction: {
        todos: [
            {id: "qkzp8zqdl1", name: "Walk the dog", complete: false},
            {id: "jo4gvtw8n9e", name: "Wash the car", complete: false},
            {id: "j40d0spd1m", name: "Go to the gym", complete: true}
        ],
        "type": RECEIVE_DATA
    }
}

describe('todos reducer', () => {
    test('return default initial state of [] when no action is passed', () => {
        const newState = todos(state, fixtures.emptyAction)
        expect(newState).toEqual([])
    })

    test('return a new state with the todo included when action ADD_TODO is passed', () => {
        const newState = todos(state, fixtures.addTodoAction)
        expect(newState).toEqual([fixtures.addTodoAction.todo])
    })

    test('return a new state with the todo removed when action REMOVE_TODO is passed', () => {
        const newState = todos(state, fixtures.removeTodoAction)
        expect(newState).toEqual([])
    })

    test('return a new state with the todo removed when action TOGGLE_TODO is passed', () => {
        const prevState = todos(state, fixtures.receiveTodosAction)
        const newState = todos(prevState, fixtures.toggleTodoAction)
        expect(newState).toEqual([
            {id: "qkzp8zqdl1", name: "Walk the dog", complete: true},
            {id: "jo4gvtw8n9e", name: "Wash the car", complete: false},
            {id: "j40d0spd1m", name: "Go to the gym", complete: true}
        ])
        expect(newState[0].complete).toBe(true)
    })

    test('return the stored todos when action RECEIVE_DATA is passed', () => {
        const newState = todos(state, fixtures.receiveTodosAction)
        expect(newState).toEqual(fixtures.receiveTodosAction.todos)
    })
})