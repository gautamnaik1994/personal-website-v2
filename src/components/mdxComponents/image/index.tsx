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

  if (typeof src === 'string') {
    return <img src={src} alt={alt} />;
  }

  const { blurWidth, blurHeight, ...otherSrc } = src;

  const aspectRatio = src.height / src.width;

  return (
    <>
      <Image
        {...otherSrc}
        alt={alt}
        width={1200}
        height={1200 * aspectRatio}
        placeholder='blur'
        onClick={() => setIsOpen(true)}
        className='main-image'
        loading='lazy'
      />
      {isOpen && (
        <div
          className={styles['floating-image']}
          onClick={() => setIsOpen(false)}
        >
          <img src={src.src} />
        </div>
      )}
    </>
  );
}

export default ImageComponent;
