import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `text-sm text-gray-900`,
  muted: `text-gray-500`,
};

interface TextProps {
  muted?: boolean;
  children: ReactNode;
}

const Text: FunctionComponent<TextProps> = ({ muted = false, children }) => (
  <div className={classNames(className.root, muted && className.muted)}>
    {children}
  </div>
);

export default Text;
