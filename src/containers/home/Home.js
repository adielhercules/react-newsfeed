import React from 'react';

import { Dashboard, Partials } from 'SHARED/Layout';
import Newsfeed from 'SHARED/Newsfeed';

const { MainContent, Sidebar, Grid, QuickLinks } = Partials;

export default () => (
  <Dashboard>
    <Grid>
      <MainContent>
        <h2>Newsfeed</h2>
        <Newsfeed />
      </MainContent>
      <Sidebar>
        <QuickLinks />
      </Sidebar>
    </Grid>
  </Dashboard>
);
