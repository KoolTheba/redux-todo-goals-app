import {
    ADD_GOAL,
    REMOVE_GOAL,
    addGoal,
    removeGoal,
} from './goals'

const goal = 'Test Todo app'
const id = 'TBR123'

describe('addGoal', () => {
    test('returns an action with type `ADD_GOAL`', () => {
        const action = addGoal(goal)
        expect(action).toEqual({
            "goal": "Test Todo app", 
            "type": "ADD_GOAL"
        })
        expect(action.type).toEqual(ADD_GOAL)
    })
})

describe('removeGoal', () => {
    test('returns an action with type `REMOVE_GOAL`', () => {
        const action = removeGoal(id)
        expect(action).toEqual({
            "id": "TBR123", 
            "type": "REMOVE_GOAL"
        })
        expect(action.type).toEqual(REMOVE_GOAL)
    })
})

