import React from 'react';

import { Dashboard, Partials } from 'SHARED/Layout';

const { MainContent, Sidebar, Grid, QuickLinks } = Partials;

export default () => (
  <Dashboard>
    <Grid>
      <MainContent>
        <div className="divider" />
        <ul>
          <li>Case 1</li>
        </ul>
      </MainContent>
      <Sidebar>
        <QuickLinks />
      </Sidebar>
    </Grid>
  </Dashboard>
);
