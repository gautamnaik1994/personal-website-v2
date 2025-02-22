'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './index.module.scss';

import SectionTitle from '@/components/SectionTitle';
import Signature from './Signature';

interface Props {
  className?: string;
}
const Declaration = ({ className }: Props): React.ReactElement => {
  const [entered, setEntered] = useState(false);
  const intersectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        //console.log('called callback', entries[0].intersectionRatio);
        if (intersectionRef && intersectionRef.current) {
          const ratio = entries[0].intersectionRatio;
          if (ratio >= 1) {
            setEntered(true);
          } else {
            setEntered(false);
          }
        }
      },
      {
        threshold: 1,
        rootMargin: `200px 0px -100px 0px`,
        //root: document.querySelector('#f_root'),
      }
    );

    const currentIntersectionRef = intersectionRef.current;
    if (currentIntersectionRef) {
      observer.observe(currentIntersectionRef);
    }
    return () => {
      if (currentIntersectionRef) {
        observer.unobserve(currentIntersectionRef);
      }
    };
  }, []);

  return (
    <section className={className} ref={intersectionRef}>
      <SectionTitle title='Declaration' />
      <div className={styles.StyledDiv}>
        <div className={styles[`declaration`]}>
          I declare that the information given above is genuine & correct to the
          best of my knowledge.
        </div>
        <div className={styles[`name-sign`]}>
          <Signature className={entered ? styles[`animate`] : ``} />
        </div>
      </div>
    </section>
  );
};

export default Declaration;
