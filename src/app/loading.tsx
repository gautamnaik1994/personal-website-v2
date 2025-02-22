import Logo from '@/components/Logo';
export default function Loading() {
  return (
    <div
      className='loading-container'
      style={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        height: `100vh`,
      }}
    >
      <Logo />
    </div>
  );
}
