import React from 'react';
import styles from './index.module.scss';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode | string;
  variant?: string;
  size?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  title?: string;
  isRounded?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'default',
    size = 'default',
    className,
    children,
    onClick,
    title,
    isRounded,
  } = props;
  const buttonClassNames = `${styles.button} ${styles[variant]} ${size === 'small' ? styles.small : ''} ${className || ''} ${isRounded ? styles.rounded : ''}`;

  return (
    <button className={buttonClassNames} onClick={onClick} title={title}>
      {children}
    </button>
  );
};

export default Button;
