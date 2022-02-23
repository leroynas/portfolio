import React, {
  Children,
  cloneElement,
  FunctionComponent,
  ReactElement,
  ReactNode,
} from 'react';

const className = {
  root: `relative border-l border-zinc-200 translate-y-4`,
};

interface TimelineProps {
  children: ReactNode;
}

const Timeline: FunctionComponent<TimelineProps> = ({ children }) => (
  <ol className={className.root}>
    {Children.map(children, (child, index) =>
      cloneElement(child as ReactElement, { index })
    )}
  </ol>
);

export default Timeline;
