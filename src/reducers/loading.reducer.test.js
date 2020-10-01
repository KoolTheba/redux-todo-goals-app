import loading  from './loading'
import { RECEIVE_DATA } from '../actions/shared'

const state = true

const fixtures = {
    emptyAction: "",
    receiveDataAction: {
        todos: [
            {id: "qkzp8zqdl1", name: "Walk the dog", complete: false},
            {id: "jo4gvtw8n9e", name: "Wash the car", complete: false},
            {id: "j40d0spd1m", name: "Go to the gym", complete: true}
        ],
        goals: [
            {id: "27vse6s34op", name: "Learn GraphQL"},
            {id: "7zq49qxlhl4", name: "Read 50 books this year"}
        ],
        "type": RECEIVE_DATA
    }
}

describe('loading reducer', () => {
    test('return default initial state of true when no action is passed', () => {
       const newState = loading(state, fixtures.emptyAction)
       expect(newState).toBe(true)
    })

    test('return false when action RECEIVE_DATA is passed', () => {
        const newState = loading(state, fixtures.receiveDataAction)
        expect(newState).toBe(false)
     })
})