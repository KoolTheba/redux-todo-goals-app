import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
import { findByTestAttr, storeFactory } from '../../test/testUtils'
import { useSelector, useDispatch } from 'react-redux'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<App store={store}/>).dive()
    console.log(wrapper.debug())
}

setup()

describe('App component', () => {
    test('renders component without error', () => {

    })
})