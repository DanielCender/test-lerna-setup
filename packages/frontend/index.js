// 'use strict';

// console.log('A sample console log');
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>Hello World</div>;
};

var mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
