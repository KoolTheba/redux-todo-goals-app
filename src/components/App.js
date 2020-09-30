import * as React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { useSelector, useDispatch } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import './App.css'

export default function App (){
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  if(loading){
    return <h3>Loading...</h3>
  }

  return (
      <div className='App'>
        <h1>Todo/Goals App</h1>
        <h5>Add and remove your todos and goals to your lists</h5>
        <h5>Also, you can toggle you todos</h5>
      <ConnectedTodos/>
      <ConnectedGoals/>   
      </div>
  )
}