import React from 'react';
import { Switch } from 'react-router';

import transformToRoutes from './transformToRoutes';

import homeRoutes from '../containers/home/home.routes';
import casesRoutes from '../containers/cases/cases.routes';
import errorRoutes from '../containers/error/error.routes';

export default props => (
  <Switch>
    {transformToRoutes(homeRoutes)}
    {transformToRoutes(casesRoutes)}
    {transformToRoutes(errorRoutes)}
  </Switch>
);
