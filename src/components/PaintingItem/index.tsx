'use client';

import React from 'react';
import Image from 'next/image';
import { Painting } from '@/types';
import styles from './index.module.scss';

interface Props {
  painting: Painting;
  onClick: (painting: Painting) => void;
}

const PaintingItem: React.FC<Props> = ({ painting, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(painting)}>
      <div className={styles.imageWrapper}>
        <Image
          src={painting.image}
          alt={painting.title}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h3 className={styles.title}>{painting.title}</h3>
            <p className={styles.tool}>{painting.toolUsed}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaintingItem;
