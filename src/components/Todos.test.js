import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Todos from './Todos';
import { findByTestAttr, storeFactory } from '../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState={}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Todos store={store}/>)
    console.log(wrapper.debug())
}

setup()

describe('Todos component', () => {
    test('renders component without error', () => {

    })
})
