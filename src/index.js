import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Mock from './mock/mock';
Mock.doMock();

window.cp = {
  user: null
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
