import React from 'react';
import cx from 'classnames';

import Wrapper from './Wrapper.styled';

const Sidebar = ({ children, className }) => (
  <div
    className={cx('column col-xs-12 col-sm-12 col-md-4 col-lg-4 col-4', className)}>
    <Wrapper>{children}</Wrapper>
  </div>
);

export default Sidebar;
