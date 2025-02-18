import styles from './index.module.scss';

interface Props {
  title?: string;
}

export default function HeroFn({
  title = `Gautam Blogs`,
}: Props): React.ReactNode {
  return (
    <header className={styles.Hero}>
      <div className={styles['img-bg']}></div>
      <div className={`${styles['img-bg']} ${styles['img-bg-2']}`}></div>
      <h1 className={styles['inner-container']}>{title}</h1>
    </header>
  );
}
