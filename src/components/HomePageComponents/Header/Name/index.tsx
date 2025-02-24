import styles from './index.module.scss';

export default function NameComponent() {
  return (
    <div className={styles.Holder}>
      <p>Hi, I am</p>
      <h1>Gautam Naik</h1>
      <p className='text-right'>Software Engineer, AI & ML</p>
    </div>
  );
}
