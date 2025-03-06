import InternalLinkButton from '@/components/Button/InternalLinkButton';

export default function NotFound() {
  return (
    <div
      style={{
        height: `calc(100vh - 212px)`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <h2>Page not found!</h2>
      <InternalLinkButton variant='primary' href='/' title='Home'>
        Home
      </InternalLinkButton>
    </div>
  );
}
