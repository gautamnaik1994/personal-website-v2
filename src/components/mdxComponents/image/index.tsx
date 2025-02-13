import Image from 'next/image';

interface ImageComponentProps {
  src:
    | string
    | {
        blurWidth?: number;
        blurHeight?: number;
        width: number;
        height: number;
        [key: string]: any;
        src: string;
      };
  alt: string;
}

function ImageComponent(props: ImageComponentProps) {
  const { src, alt } = props;

  if (typeof src === 'string') {
    return <img src={src} alt={alt} />;
  }

  const { blurWidth, blurHeight, ...otherSrc } = src;

  const aspectRatio = src.height / src.width;

  return (
    <Image
      {...otherSrc}
      alt={alt}
      width={1200}
      height={1200 * aspectRatio}
      placeholder='blur'
    />
  );
}

export default ImageComponent;
