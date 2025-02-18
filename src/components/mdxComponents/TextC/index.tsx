import { type ComponentPropsWithoutRef } from 'react';
import styles from './index.module.scss';

export function H1(props: ComponentPropsWithoutRef<'h1'>) {
  return <h1 className={styles.h1} {...props} />;
}

export function H2(props: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={styles.h2} {...props} />;
}

export function H3(props: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className={styles.h3} {...props} />;
}

export function H4(props: ComponentPropsWithoutRef<'h4'>) {
  return <h4 className={styles.h4} {...props} />;
}

export function H5(props: ComponentPropsWithoutRef<'h5'>) {
  return <h5 className={styles.h5} {...props} />;
}

export function H6(props: ComponentPropsWithoutRef<'h6'>) {
  return <h6 className={styles.h6} {...props} />;
}

export function P(props: ComponentPropsWithoutRef<'p'>) {
  return <p className={styles.p} {...props} />;
}

export function UL(props: ComponentPropsWithoutRef<'ul'>) {
  return <ul className={styles.ul} {...props} />;
}

export function OL(props: ComponentPropsWithoutRef<'ol'>) {
  return <ol className={styles.ol} {...props} />;
}

export function A(props: ComponentPropsWithoutRef<'a'>) {
  return <a {...props} target='_blank' rel='noopener noreferrer' />;
}
