'use client';
import React, { useState, ReactNode } from 'react';

function ExpandableSeeMore({ children }: { children: ReactNode }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setIsExpanded(!isExpanded);
    // event.target.blur();
  };

  return (
    <div className='expandable-see-more'>
      <div className={`inner ${isExpanded ? `open` : `close`}`}>{children}</div>
      <button onClick={(e) => handleClick(e)}>
        {isExpanded ? `See Less` : `See More`}
      </button>
    </div>
  );
}

export default ExpandableSeeMore;
