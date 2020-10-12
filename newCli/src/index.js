import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import './service';
/*eslint-disable no-undef */
console.log(IS_DEV);
/*eslint-disable no-unused-expressions*/
if (IS_DEV.indexOf('test') !== -1) {
    import('./__mocks__');
}

ReactDOM.render(<App />, document.getElementById('root'));
