import React from 'react';
import reactConfig from './routerConfig';
import loadable from 'react-loadable';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Loading } from 'antd-mobile';

class RouterGenerator {
  getRouter() {
    const routes = this.getRouterConfig();
    return (
      <Switch>
        {
          routes.map(route => {
            return (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.page}
              />
            );
          })
        }
        <Redirect path='/' to='/home' />
      </Switch>
    )
  }
  getRouterConfig() {
    const routes = reactConfig.map(item => {
      return {
        ...item,
        page: loadable({
          loader: item.page,
          loading: Loading,
        })
      }
    })
    return routes;
  }
}

const router = new RouterGenerator();
export default router;
