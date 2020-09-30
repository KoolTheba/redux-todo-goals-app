import {
    ADD_TODO,
    REMOVE_TODO,
    TOGGLE_TODO,
    addTodo,
    removeTodo,
    toggleTodo
} from './todos'

const todo = 'Walk the dog'
const id = 'TBR987'

describe('addTodo', () => {
    test('returns an action with type `ADD_TODO`', () => {
        const action = addTodo(todo)
        expect(action).toEqual({
            "todo": "Walk the dog", 
            "type": "ADD_TODO"
        })
        expect(action.type).toEqual(ADD_TODO)
    })
})

describe('removeTodo', () => {
    test('returns an action with type `REMOVE_TODO`', () => {
        const action = removeTodo(id)
        expect(action).toEqual({
            "id": "TBR987",
            "type": "REMOVE_TODO"
        })
        expect(action.type).toEqual(REMOVE_TODO)
    })
})

describe('toggleTodo', () => {
    test('returns an action with type `TOGGLE_TODO`', () => {
        const action = toggleTodo(id)
        expect(action).toEqual({
            "id": "TBR987",
            "type": "TOGGLE_TODO"
        })
        expect(action.type).toEqual(TOGGLE_TODO)
    })
})

