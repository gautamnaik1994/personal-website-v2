'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Painting } from '@/types';
import styles from './index.module.scss';
// Removed lucide-react import
interface Props {
  painting: Painting;
  onClose: () => void;
}

const ImageModal: React.FC<Props> = ({ painting, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!painting) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <div className={styles.imageContainer}>
          <Image
            src={painting.image}
            alt={painting.title}
            layout="responsive"
            objectFit="contain"
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
            <h3>{painting.title}</h3>
            <p>{painting.toolUsed}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
