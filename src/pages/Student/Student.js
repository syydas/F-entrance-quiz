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
  // TODO GTB-知识点: + 合理使用async/await
  async componentDidMount() {
    // TODO GTB-知识点: * 建议把数据请求提取到单独的service
    const students = await axios.get('http://localhost:8080/students');
    this.setState({ students: students.data });
  }

  render() {
    return (
      // TODO GTB-知识点: - 建议使用<main>标签
      <div>
        {/* TODO GTB-知识点: + 第一层组件划分合理 */}
        <StudentsGroup />
        <StudentsList students={this.state.students} />
      </div>
    );
  }
}

export default Student;
