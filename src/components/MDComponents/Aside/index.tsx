import { type ComponentPropsWithoutRef } from 'react';
import styles from './index.module.scss';

export function Aside(props: ComponentPropsWithoutRef<'aside'>) {
  return <aside className={styles.aside} {...props} />;
}
