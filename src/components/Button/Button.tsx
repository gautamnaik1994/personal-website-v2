import React from 'react';
import styles from './index.module.scss';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode | string;
  variant?: string;
  size?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'default',
    size = 'default',
    className,
    children,
    onClick,
    title,
  } = props;
  const buttonClassNames = `${styles.button} ${styles[variant]} ${size === 'small' ? styles.small : ''} ${className || ''}`;

  return (
    <button className={buttonClassNames} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
