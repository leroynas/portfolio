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
  children: ReactNode;
}

const className = {
  root: `block font-bold leading-snug last:mb0 first:mt-0`,
  sizes: {
    [HeadingSizes.Small]: `text-2xl mb-4 mt-6`,
    [HeadingSizes.Medium]: `text-4xl mb-6 mt-8`,
    [HeadingSizes.Large]: `text-6xl mb-8 mt-6`,
  },
};

const Heading: FunctionComponent<HeadingProps> = ({
  size,
  children,
  className: classNameProp,
}) => (
  <span
    className={classNames(classNameProp, className.root, className.sizes[size])}
  >
    {children}
  </span>
);

export default Heading;