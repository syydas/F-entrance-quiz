import React from 'react';
import './Groups.scss';

class Groups extends React.Component {
  render() {
    return (
      <div className="groups">
        <header className="group-name">{this.props.groupName}</header>
        <ul className="group-member">
          <li>1. </li>
          <li>2. </li>
        </ul>
      </div>
    );
  }
}

export default Groups;
