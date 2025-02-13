interface AlertProps {
  children: React.ReactNode;
  type: string;
}

function Alert({ type, children }: AlertProps) {
  return (
    <div className={`alert alert-${type}`}>
      {children}
    </div>
  );
}

export default Alert;