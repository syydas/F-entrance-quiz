import React from 'react';
import './StudentsGroup.scss';

class StudentGroup extends React.Component {
  render() {
    return (
      <div className="students-group">
        <header className="group-header">
          <h1>分组列表</h1>
          <button type="button" className="group_btn">
            分组学员
          </button>
        </header>
      </div>
    );
  }
}

export default StudentGroup;
