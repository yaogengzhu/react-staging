import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less';
import App from './component/App.jsx'

ReactDOM.render(<App />, document.getElementById('root'))

console.log(process.env.NODE_ENV)
