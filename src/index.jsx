import React from 'react'
import ReactDOM from 'react-dom'
import BasicLayout from './layout'
import 'antd/dist/antd.less'
import '@/assets/styles/index.less'

const App = () => {
    return <BasicLayout />
}

ReactDOM.render(<App />, document.getElementById('root'))
