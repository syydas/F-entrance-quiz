import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Student from './Student';
import StudentList from '../../components/StudentsList/StudentsList';

configure({ adapter: new Adapter() });
describe('<Student />', () => {
  it('display a line', () => {
    const wrapper = shallow(<Student />);
    expect(wrapper.find(StudentList).exists()).toBe(true);
  });
});
