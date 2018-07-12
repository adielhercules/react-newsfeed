import React from 'react';

import { Dashboard, Partials } from 'SHARED/Layout';
import Newsfeed from 'SHARED/Newsfeed';

const { MainContent, Sidebar, Grid, QuickLinks } = Partials;

export default () => (
  <Dashboard>
    <Grid>
      <MainContent>
        <Newsfeed />
      </MainContent>
      <Sidebar>
        <QuickLinks />
      </Sidebar>
    </Grid>
  </Dashboard>
);
