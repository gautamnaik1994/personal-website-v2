import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

export interface LinkProps {
  className?: string;
  children?: React.ReactNode | string;
  variant?: string;
  size?: string;
  title?: string;
  href: string;
}

const InternalLinkComponent: React.FC<LinkProps> = (props) => {
  const {
    variant = 'default',
    size = 'default',
    className,
    children,
    title,
    href,
  } = props;
  const linkClassNames = `${styles.button} ${styles[variant]} ${size === 'small' ? styles.small : ''} ${className || ''}`;

  return (
    <Link href={href} className={linkClassNames} title={title}>
      {children}
    </Link>
  );
};

export default InternalLinkComponent;
