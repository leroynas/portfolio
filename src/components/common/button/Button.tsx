import React, { FunctionComponent, ReactNode } from 'react';
import classNames from 'classnames';

import { Link } from 'gatsby';

const classes = {
  root: `font-sans font-bold py-2 px-4 rounded drop-shadow-md`,
  primary: `bg-blue-500 hover:bg-blue-700 text-white`,
  secondary: `bg-white bg-slate-100 text-slate-800`,
};

export enum ButtonVariants {
  Primary = 'primary',
  Secondary = 'secondary',
}

interface ButtonProps {
  to: string;
  variant?: ButtonVariants;
  children: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
  to,
  variant = ButtonVariants.Primary,
  children,
}) => {
  const className = classNames(classes.root, classes[variant]);

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export default Button;
