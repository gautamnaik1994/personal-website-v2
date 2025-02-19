'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.scss';

interface ImageComponentProps {
  src:
    | string
    | {
        blurWidth?: number;
        blurHeight?: number;
        width: number;
        height: number;
        src: string;
      };
  alt: string;
}

function ImageComponent(props: ImageComponentProps) {
  const { src, alt } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (typeof src === 'string') {
    /* eslint-disable-next-line @next/next/no-img-element */
    return <img src={src} alt={alt} />;
  }

  // const { blurWidth, blurHeight, ...otherSrc } = src;

  delete src.blurWidth;
  delete src.blurHeight;

  const aspectRatio = src.height / src.width;

  return (
    <>
      <Image
        {...src}
        alt={alt}
        width={750}
        height={750 * aspectRatio}
        placeholder='blur'
        onClick={() => setIsOpen(true)}
        className='main-image'
        loading='lazy'
        quality={100}
      />
      {isOpen && (
        <div
          className={styles['floating-image']}
          onClick={() => setIsOpen(false)}
        >
          {isLoading && <div className={styles.loader}>Loading</div>}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src.src} alt={alt} onLoad={handleImageLoad} />
        </div>
      )}
    </>
  );
}

export default ImageComponent;
