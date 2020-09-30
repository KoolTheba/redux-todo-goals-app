import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import {
    handleAddGoal,
    handleDeleteGoal,
} from '../actions/goals'
import './Goals.css'

export default function Goals (){
    const input = React.useRef('')
    const goals = useSelector((state) => state.goals)
    const dispatch = useDispatch()

    const addItem = (e) => {
        e.preventDefault()
        dispatch(handleAddGoal(
            input.current.value,
            () => input.current.value = ''
        ))
    }

    const removeItem = (goal) => dispatch(handleDeleteGoal(goal))

    return(
        <div className='Todos'>
            <h3>Goals</h3>
            <input
                className='goals-input'
                type='text'
                placeholder='Add Goal'
                ref={input}
            />
            <button 
                className='add-goal' 
                onClick={addItem}
            >Add Goal
            </button>
            <List
                items={goals}
                remove={removeItem} 
            />
        </div>
    )
}