import classNames from 'classnames';
import { Link } from 'gatsby';
import React, { FunctionComponent, ReactNode } from 'react';

const className = {
  root: `font-sans font-bold py-2 px-4 rounded drop-shadow-md`,
  primary: `bg-blue-500 hover:bg-blue-700 text-white`,
  secondary: `bg-white hover:bg-slate-100 text-slate-800`,
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
}) => (
  <Link to={to} className={classNames(className.root, className[variant])}>
    {children}
  </Link>
);

export default Button;
