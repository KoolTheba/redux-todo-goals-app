import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import {
    handleAddTodo,
    handleDeleteTodo,
    handleToggle
} from '../actions/todos'
import './Todos.css'

export default function Todos(){
    const input = React.useRef('')
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    const addItem = (e) => {
        e.preventDefault()
        dispatch(handleAddTodo(
            input.current.value,
            () => input.current.value = ''
        ))
    }

    const removeItem = (todo) => dispatch(handleDeleteTodo(todo))

    const toggleItem = (id) => dispatch(handleToggle(id))

    return(
        <div className='Todos'>
        <h3>Todos</h3>
        <input
            className='todo-input'
            type='text'
            placeholder='Add Todo'
            ref={input}
        />
        <button
            className='add-todo'
            onClick={addItem}
        >Add Todo
        </button>
        <List 
            items={todos}
            remove={removeItem}
            toggle={toggleItem}
        />
        </div>
    )
}