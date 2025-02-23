import styles from './index.module.scss';

interface AlertProps {
  children: React.ReactNode;
  variant: 'default' | 'warning' | 'danger' | 'info' | 'success';
}

function Alert({ variant, children }: AlertProps) {
  return (
    <div className={`${styles.AlertStyles} ${styles[variant]}`}>{children}</div>
  );
}

Alert.defaultProps = {
  variant: 'default',
};

export default Alert;
