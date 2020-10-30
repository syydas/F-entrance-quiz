import React, { Component } from 'react';
import './App.scss';
import Student from '../pages/Student/Student';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Student />
      </div>
    );
  }
}

export default App;
// TODO GTB-工程实践: + 小步提交，有TDD部分实现
// TODO GTB-完成度: * 完成的有点低
// TODO GTB-测试: * 有shadow test
