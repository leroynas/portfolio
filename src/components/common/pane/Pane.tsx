import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `px-4 py-3 rounded bg-gray-100`,
  between: `flex justify-between items-center`,
};

interface PaneProps {
  between: boolean;
  children: ReactNode;
}

const Pane: FunctionComponent<PaneProps> = ({ between, children }) => (
  <div className={classNames(className.root, between && className.between)}>
    {children}
  </div>
);

export default Pane;
