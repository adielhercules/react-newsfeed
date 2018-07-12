import React from 'react';
import cx from 'classnames';

import Wrapper from './Wrapper.styled';

const MainContent = ({ children, className }) => (
  <div
    className={cx('column col-xs-12 col-sm-12 col-md-8 col-lg-8 col-8', className)}>
    <Wrapper>{children}</Wrapper>
  </div>
);

export default MainContent;
