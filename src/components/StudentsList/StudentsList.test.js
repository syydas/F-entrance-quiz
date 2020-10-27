import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StudentList from './StudentsList';

configure({ adapter: new Adapter() });
describe('<StudentList />', () => {
  it('should display a header', () => {
    const wrapper = shallow(<StudentList />);
    expect(wrapper.text()).toContain('学员列表');
  });

  it('should display a students list', () => {
    const wrapper = shallow(<StudentList />);
    expect(wrapper.find('.student-list').exists()).toBe(true);
    expect(wrapper.find('.student-list').children().length).toEqual(1);
  });

  it('should display students', () => {
    const wrapper = shallow(<StudentList />);
    expect(wrapper.text()).toContain('Suqin');
  });
});
