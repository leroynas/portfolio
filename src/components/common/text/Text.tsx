import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

export enum TextSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface TextProps {
  size?: TextSizes;
  muted?: boolean;
  children: ReactNode;
}

const className = {
  root: `text-gray-900`,
  muted: `text-gray-500`,
  sizes: {
    [TextSizes.Small]: 'text-sm',
    [TextSizes.Medium]: 'text-md',
    [TextSizes.Large]: 'text-lg',
  },
};

const Text: FunctionComponent<TextProps> = ({
  size = TextSizes.Medium,
  muted = false,
  children,
}) => (
  <div
    className={classNames(
      className.root,
      className.sizes[size],
      muted && className.muted
    )}
  >
    {children}
  </div>
);

export default Text;
