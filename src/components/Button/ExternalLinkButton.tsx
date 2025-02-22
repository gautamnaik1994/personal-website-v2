import React from 'react';
import styles from './index.module.scss';

export interface LinkProps {
  className?: string;
  children?: React.ReactNode | string;
  variant?: string;
  size?: string;
  title?: string;
  href: string;
}

const ExternalLinkComponent: React.FC<LinkProps> = (props) => {
  const {
    variant = `default`,
    size = `default`,
    className,
    children,
    title,
    href,
  } = props;
  const linkClassNames = `${styles.button} ${styles[variant]} ${size === `small` ? styles.small : ``} ${className || ``}`;

  return (
    <a
      href={href}
      className={linkClassNames}
      title={title}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  );
};

export default ExternalLinkComponent;
