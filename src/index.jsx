import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from './layout'

import 'antd/dist/antd.less'
import './style/lib/animate.css'
import './style/index.less'
import './style/antd/index.less'

const App = () => {
    return <BasicLayout />
}

ReactDOM.render(<App />, document.getElementById('root'))
