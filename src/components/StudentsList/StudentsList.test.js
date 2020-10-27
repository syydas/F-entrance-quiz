import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StudentsList from './StudentsList';

configure({ adapter: new Adapter() });
describe('<StudentList />', () => {
  const props = {
    students: [
      {
        id: 1,
        name: 'Suqin',
      },
      {
        id: 2,
        name: 'Asu',
      },
    ],
  };

  it('should display a header', () => {
    const wrapper = shallow(<StudentsList students={props.students} />);
    expect(wrapper.text()).toContain('学员列表');
  });

  it('should display a students list', () => {
    const wrapper = shallow(<StudentsList students={props.students} />);
    expect(wrapper.find('.students-list').exists()).toBe(true);
    expect(wrapper.find('.students-list').children().length).toEqual(2);
  });

  it('should display students', () => {
    const wrapper = shallow(<StudentsList students={props.students} />);
    expect(wrapper.text()).toContain('1. Suqin');
  });
});
