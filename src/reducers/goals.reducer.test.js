import goals from './goals'
import { ADD_GOAL, REMOVE_GOAL } from '../actions/goals'
import { RECEIVE_DATA } from '../actions/shared'

const state = []

const fixtures = {
    emptyAction: "",
    addAction: {
        "goal": "Learn Redux",
        "type": ADD_GOAL
    },
    removeAction: {
        "goal": "Learn Redux",
        "type": REMOVE_GOAL
    },
    receiveAction: {
        goals: [
            {id: "27vse6s34op", name: "Learn GraphQL"},
            {id: "7zq49qxlhl4", name: "Read 50 books this year"}
        ],
        "type": RECEIVE_DATA
    }
}

describe('goals reducer', () => {

    test('return default initial state of [] when no action is passed', () => {
        const newState = goals(state, fixtures.emptyAction)
        expect(newState).toEqual([])
    })

    test('return a new state with the new goal when action ADD_GOAL is passed', () => {
        const newState = goals(state, fixtures.addAction)
        expect(newState).toEqual([fixtures.addAction.goal])
    })

    test('return a new state with the goal removed when action REMOVE_GOAL is passed', () => {
        const newState = goals(state, fixtures.removeAction)
        expect(newState).toEqual([])
    })

    test('return goals in the store when action RECEIVE_DATA is passed', () => {
        const newState = goals(state, fixtures.receiveAction)
        expect(newState).toEqual([            
            {id: "27vse6s34op", name: "Learn GraphQL"},
            {id: "7zq49qxlhl4", name: "Read 50 books this year"}
        ])
    })
})
