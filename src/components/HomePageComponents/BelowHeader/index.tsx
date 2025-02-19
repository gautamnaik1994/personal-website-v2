'use client';
import React, { useRef, useEffect } from 'react';

export default function BelowHeaderComponent() {
  const belowHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      function (entries) {
        if (belowHeaderRef.current) {
          if (entries[0].intersectionRatio < 0.5) {
            document
              .querySelector(`nav`)
              ?.classList.remove(`navbar-special-styles`);
          } else if (entries[0].intersectionRatio > 0.5) {
            document
              .querySelector(`nav`)
              ?.classList.add(`navbar-special-styles`);
          }
        }
      },
      {
        threshold: [0, 0.5, 1],
        rootMargin: '-50% 0px 200px 0px',
      }
    );

    if (belowHeaderRef.current) {
      observer.observe(belowHeaderRef.current);
    }
    return () => {
      document.querySelector(`nav`)?.classList.remove(`navbar-special-styles`);
      observer.disconnect();
    };
  }, []);
  return <div ref={belowHeaderRef} className='below-header'></div>;
}
