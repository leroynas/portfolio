import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `flex flex-col gap-3 py-2`,
};

interface StackProps {
  children: ReactNode;
}

const Stack: FunctionComponent<StackProps> = ({ children }) => (
  <div className={className.root}>{children}</div>
);

export default Stack;
