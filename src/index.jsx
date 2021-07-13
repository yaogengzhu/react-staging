import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.less'
import Home from '@/Home/index'
console.log(Home)
const App = () => {
    return <Home />
}

ReactDOM.render(<App />, document.getElementById('root'))

console.log(process.env.NODE_ENV)
