import {
    RECEIVE_DATA,
    receiveData
} from './shared'

const todos = [
    {id: "tcnsbyaf0k", name: "Walk the dog", complete: false},
    {id: "sbplyt2uw68", name: "Wash the car", complete: false},
    {id: "fbmttwp15k4", name: "Go to the gym", complete: true}
]

const goals = [
    {id: "27vse6s34op", name: "Learn Redux"},
    {id: "7zq49qxlhl4", name: "Read 50 books this year"}
]

describe('receiveData', () => {
    test('returns an action with type `RECEIVE_DATA`', () => {
        const action = receiveData(todos, goals)
        expect(action).toEqual({
            "type": RECEIVE_DATA,
            todos,
            goals
        })
        expect(action.type).toEqual(RECEIVE_DATA)
        expect(todos[0].id).toBe("tcnsbyaf0k")
        expect(goals[1].name).toBe("Read 50 books this year")
    })
})