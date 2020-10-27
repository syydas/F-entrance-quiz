import React from 'react';
import './StudentsGroup.scss';
import Groups from './Groups';

class StudentGroup extends React.Component {
  render() {
    const groupsNum = [1, 2, 3, 4, 5, 6];
    return (
      <div className="students-group">
        <header className="group-header">
          <h1>分组列表</h1>
          <button type="button" className="group_btn">
            分组学员
          </button>
        </header>
        {groupsNum.map((groupName) => (
          <Groups key={groupName} groupName={groupName} />
        ))}
      </div>
    );
  }
}

export default StudentGroup;
