import React from 'react';
import './StudentsList.scss';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  handleClick() {
    this.setState({
      display: true,
    });
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className="students-list">
          {this.props.students.map((student) => (
            <span key={student.id} className="students-name">
              {student.id}. {student.name}
            </span>
          ))}
          {this.state.display && <input type="name" />}
          <button type="button" className="add_btn" onClick={this.handleClick.bind(this)}>
            +添加学员
          </button>
        </div>
      </div>
    );
  }
}

export default StudentList;
