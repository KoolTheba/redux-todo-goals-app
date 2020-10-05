import { createStore } from 'redux'
import reducer from '../src/reducers'
import middleware from '../src/middleware'
import { Provider } from 'react-redux'

export const storeFactory = (initialState) => {
    return createStore(reducer, initialState)
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

