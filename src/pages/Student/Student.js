import React from 'react';
import axios from 'axios';
import StudentsList from '../../components/StudentsList/StudentsList';
import 'babel-polyfill';
import StudentsGroup from '../../components/StudentsGroup/StudentsGroup';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    const students = await axios.get('http://localhost:8080/students');
    this.setState({ students: students.data });
  }

  render() {
    return (
      <div>
        <StudentsGroup />
        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default Student;
