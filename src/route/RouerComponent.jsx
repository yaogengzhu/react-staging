import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import routes from './index'

const RouerComponent = () => {
    return (
        <Switch>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Redirect to="/home"></Redirect>
        </Switch>
    )
}

function RouteWithSubRoutes(route) {
    return <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
}

export default RouerComponent
