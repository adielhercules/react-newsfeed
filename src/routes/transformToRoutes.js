import React from 'react';
import { Route, Switch } from 'react-router';

const transformToRoutes = (routes = []) => {
  return routes.map((route, idx) => {
    const { childRoutes = [], render, ...opts } = route;
    if (childRoutes.length) {
      return (
        <Route
          key={`${route.name}${idx}`}
          {...opts}
          render={props => (
            <Switch>
              {transformToRoutes([
                ...childRoutes,
                {
                  ...opts,
                },
              ])}
            </Switch>
          )}
        />
      );
    }

    return <Route key={`${route.name}${idx}`} {...opts} />;
  });
};

export default transformToRoutes;
