import React from 'react';
import './StudentsGroup.scss';
import Groups from './Groups';

class StudentGroup extends React.Component {
  render() {
    const groupsNum = [1, 2, 3, 4, 5, 6];
    return (
      // TODO GTB-知识点: - 建议使用<section>标签
      <div className="students-group">
        {/* TODO GTB-知识点: + <header> <h1> <button>使用合理*/}
        <header className="group-header">
          <h1>分组列表</h1>
          {/* TODO GTB-工程实践: - class命名规则应该统一，有的地方用的'-'，有的地方用'_'*/}
          <button type="button" className="group_btn">
            分组学员
          </button>
        </header>
        {groupsNum.map((groupName) => (
          // TODO GTB-知识点: + 有提取组件很好
          // TODO GTB-工程实践: - 命名有问题，这个是单个group，可以参考GroupItem或者Group
          <Groups key={groupName} groupName={groupName} />
        ))}
      </div>
    );
  }
}

export default StudentGroup;
