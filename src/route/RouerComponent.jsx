import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './index'

const RouerComponent = () => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Redirect path='/' to="/home"></Redirect>
        </Switch>
    )
}

function RouteWithSubRoutes(route) {
    console.log(route)
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
}

export default RouerComponent
