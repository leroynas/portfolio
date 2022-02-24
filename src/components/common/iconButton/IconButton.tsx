import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FunctionComponent } from 'react';
import { MdDarkMode, MdKeyboardArrowDown, MdLightMode } from 'react-icons/md';

export enum IconButtonVariants {
  ArrowDown = 'arrow-down',
  LightMode = 'light-mode',
  DarkMode = 'dark-mode',
}

export enum IconButtonSizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

interface IconButtonProps {
  to?: string;
  onClick?: () => void;
  variant: IconButtonVariants;
  size?: IconButtonSizes;
  bounce?: boolean;
  className?: string;
}

const icons = {
  [IconButtonVariants.ArrowDown]: MdKeyboardArrowDown,
  [IconButtonVariants.LightMode]: MdLightMode,
  [IconButtonVariants.DarkMode]: MdDarkMode,
};

const className = {
  root: `text-white hover:text-zinc-200`,
  bounce: `animate-bounce`,
  sizes: {
    [IconButtonSizes.Small]: `text-xl`,
    [IconButtonSizes.Medium]: `text-3xl`,
    [IconButtonSizes.Large]: `text-6xl`,
  },
};

const IconButton: FunctionComponent<IconButtonProps> = ({
  to,
  onClick,
  variant,
  size,
  bounce,
  className: classNameProp,
}) => {
  const IconComponent = icons[variant];

  const buttonClassName = classNames(
    classNameProp,
    className.root,
    size && className.sizes[size],
    bounce && className.bounce
  );

  if (to) {
    return (
      <Link to={to} className={buttonClassName}>
        <IconComponent />
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={buttonClassName}>
      <IconComponent />
    </button>
  );
};

export default IconButton;
