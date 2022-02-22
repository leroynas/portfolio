import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `px-4 py-3 rounded bg-gray-100`,
};

interface PaneProps {
  children: ReactNode;
}

const Pane: FunctionComponent<PaneProps> = ({ children }) => (
  <div className={className.root}>{children}</div>
);

export default Pane;
