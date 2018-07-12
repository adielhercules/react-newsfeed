import React from 'react';
import cx from 'classnames';

const Column = ({ children, className }) => (
  <div className={cx('column', className)}>{children}</div>
);

export default Column;
