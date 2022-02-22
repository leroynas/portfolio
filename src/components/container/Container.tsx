import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `max-w-5xl mx-auto p-8`,
};

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => (
  <div className={className.root}>{children}</div>
);

export default Container;
