import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from './layout'

import 'antd/dist/antd.less'

const App = () => {
    return <BasicLayout />
}

ReactDOM.render(<App />, document.getElementById('root'))
