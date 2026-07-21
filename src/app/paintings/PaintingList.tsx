'use client';

import React, { useState } from 'react';
import { Painting } from '@/types';
import PaintingItem from '@/components/PaintingItem';
import ImageModal from '@/components/ImageModal';
import styles from './index.module.scss';

interface Props {
  paintings: Painting[];
}

const PaintingList: React.FC<Props> = ({ paintings }) => {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(null);

  return (
    <>
      <div className={styles.grid}>
        {paintings.map((painting) => (
          <PaintingItem
            key={painting.title}
            painting={painting}
            onClick={setSelectedPainting}
          />
        ))}
      </div>
      {selectedPainting && (
        <ImageModal
          painting={selectedPainting}
          onClose={() => setSelectedPainting(null)}
        />
      )}
    </>
  );
};

export default PaintingList;
