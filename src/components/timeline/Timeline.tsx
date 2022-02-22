import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `relative border-l border-zinc-200 tranzinc-y-4`,
};

interface TimelineProps {
  children: ReactNode;
}

const Timeline: FunctionComponent<TimelineProps> = ({ children }) => (
  <ol className={className.root}>{children}</ol>
);

export default Timeline;
