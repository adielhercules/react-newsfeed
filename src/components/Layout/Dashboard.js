import React from 'react';

import { Navbar, Content } from './partials';

export default ({ children }) => (
  <div>
    <Navbar />
    <Content>{children}</Content>
  </div>
);
