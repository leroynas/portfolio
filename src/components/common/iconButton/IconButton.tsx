import React, { FunctionComponent } from 'react';

import { Link } from 'gatsby';
import classNames from 'classnames';
import { MdKeyboardArrowDown } from 'react-icons/md';

export enum IconButtonVariants {
  ArrowDown = 'arrow-down',
}

export enum IconButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface IconButtonProps {
  to: string;
  variant: IconButtonVariants;
  size?: IconButtonSizes;
  bounce?: boolean;
  className?: string;
}

const icons = {
  [IconButtonVariants.ArrowDown]: MdKeyboardArrowDown,
};

const className = {
  root: `text-white`,
  bounce: `animate-bounce`,
  sizes: {
    [IconButtonSizes.Small]: `text-xl`,
    [IconButtonSizes.Medium]: `text-3xl`,
    [IconButtonSizes.Large]: `text-6xl`,
  },
};

const IconButton: FunctionComponent<IconButtonProps> = ({
  to,
  variant,
  size,
  bounce,
  className: classNameProp,
}) => {
  const IconComponent = icons[variant];

  return (
    <Link
      to={to}
      className={classNames(
        classNameProp,
        className.root,
        size && className.sizes[size],
        bounce && className.bounce
      )}
    >
      <IconComponent />
    </Link>
  );
};

export default IconButton;
