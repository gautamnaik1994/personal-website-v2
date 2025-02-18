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
        [key: string]: any;
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
    return <img src={src} alt={alt} />;
  }

  const { blurWidth, blurHeight, ...otherSrc } = src;

  const aspectRatio = otherSrc.height / otherSrc.width;

  return (
    <>
      <Image
        {...otherSrc}
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
          <img src={src.src} alt={alt} onLoad={handleImageLoad} />
        </div>
      )}
    </>
  );
}

export default ImageComponent;
