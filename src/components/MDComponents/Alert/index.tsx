import styles from './index.module.scss';

interface AlertProps {
  children: React.ReactNode;
  variant: 'default' | 'warning' | 'danger' | 'info' | 'success';
}

function Alert({ variant, children }: AlertProps) {
  return (
    <div className={`${styles.AlertStyles} ${styles[variant]}`}>
      <div className={styles.AlertHeader}>
        <i className={`icon-${variant}`}></i> <span>{variant}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}

Alert.defaultProps = {
  variant: 'default',
};

export default Alert;
