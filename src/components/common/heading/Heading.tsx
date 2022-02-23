import classNames from 'classnames';
import React, { FunctionComponent, ReactNode } from 'react';

export enum HeadingSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface HeadingProps {
  className?: string;
  size: HeadingSizes;
  mono?: boolean;
  children: ReactNode;
}

const className = {
  root: `block font-bold leading-snug last:mb-0 first:mt-0`,
  sizes: {
    [HeadingSizes.Small]: `text-2xl mb-4 mt-6`,
    [HeadingSizes.Medium]: `text-3xl mb-6 mt-8`,
    [HeadingSizes.Large]: `text-5xl mb-8 mt-6`,
  },
  mono: `font-mono`,
};

const Heading: FunctionComponent<HeadingProps> = ({
  size,
  mono = false,
  children,
  className: classNameProp,
}) => (
  <span
    className={classNames(
      classNameProp,
      className.root,
      className.sizes[size],
      mono && className.mono
    )}
  >
    {children}
  </span>
);

export default Heading;
