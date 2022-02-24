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
  bold?: boolean;
  children: ReactNode;
}

const className = {
  root: `text-zinc-900 leading-normal dark:text-white`,
  muted: `text-zinc-500`,
  bold: `font-semibold`,
  sizes: {
    [TextSizes.Small]: 'text-sm',
    [TextSizes.Medium]: 'text-md',
    [TextSizes.Large]: 'text-lg',
  },
};

const Text: FunctionComponent<TextProps> = ({
  size = TextSizes.Medium,
  muted = false,
  bold = false,
  children,
}) => (
  <div
    className={classNames(
      className.root,
      className.sizes[size],
      muted && className.muted,
      bold && className.bold
    )}
  >
    {children}
  </div>
);

export default Text;
