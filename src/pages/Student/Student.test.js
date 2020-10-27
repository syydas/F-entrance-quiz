import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Student from './Student';

configure({ adapter: new Adapter() });
describe('<Student />', () => {
  it('display a line', () => {
    const wrapper = shallow(<Student />);
    expect(wrapper.text()).toBe('Hello, this is Suqin~');
  });
});
