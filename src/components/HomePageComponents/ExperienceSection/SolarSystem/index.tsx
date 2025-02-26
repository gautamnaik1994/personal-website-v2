import * as React from 'react';
import { SVGProps, memo } from 'react';
import './index.scss';

const SolarSystem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={2000}
    height={2000}
    fill='none'
    viewBox='0 0 2000 2000'
    className='SolarSystem'
    {...props}
  >
    <g className='sun' filter='url(#a)'>
      <circle cx={1000} cy={1000} r={32} fill='orange' />
      <circle cx={1000} cy={1000} r={31.5} stroke='#636363' />
    </g>
    <g stroke='#636363' className='all-orbits'>
      <circle cx={1000} cy={1000} r={97.214} opacity={0.9} />
      <circle cx={1000} cy={1000} r={180.5} opacity={0.8} />
      <circle cx={1000} cy={1000} r={264.5} opacity={0.7} />
      <circle cx={1000} cy={1000} r={347.5} opacity={0.6} />
      <circle cx={1000} cy={1000} r={434.5} opacity={0.5} />
      <circle cx={1000} cy={1000} r={534.918} opacity={0.4} />
      <circle cx={1000} cy={1000} r={646.143} opacity={0.3} />
      <circle cx={1000} cy={1000} r={777.179} opacity={0.25} />
      <circle cx={1000} cy={1000} r={925.5} opacity={0.2} />
    </g>
    <g className='orbit-container mercury'>
      <circle
        cx={1067.5}
        cy={1069.7}
        r={5.5}
        fill='#E39400'
        className='planet mercury'
      />
    </g>
    <g className='orbit-container venus'>
      <circle
        cx={850.5}
        cy={898.7}
        r={6.5}
        fill='#E7C27B'
        className='planet venus'
      />
    </g>
    <g className='orbit-container earth'>
      <circle
        cx={1171}
        cy={799.2}
        r={9}
        fill='#2A94EA'
        className='earth-body'
      />
      <g className='moon-orbit'>
        <circle cx={1182} cy={788} r={2} fill='#FBF474' className='moon' />
      </g>
    </g>
    <g className='orbit-container mars'>
      <circle
        cx={652.5}
        cy={1000.5}
        r={8.5}
        fill='#C1440E'
        className='planet mars'
      />
    </g>
    <g className='orbit-container jupiter'>
      <circle
        cx={1223.6}
        cy={1372.36}
        r={13}
        fill='#D9A066'
        className='planet jupiter'
      />
    </g>
    <g className='orbit-container saturn'>
      <circle
        cx={676}
        cy={1427.2}
        r={25}
        stroke='#EDE0C8'
        strokeWidth={2}
        className='saturn-ring'
        opacity={0.4}
      />
      <circle
        cx={676}
        cy={1427.2}
        r={30}
        stroke='#EDE0C8'
        strokeWidth={2}
        className='saturn-ring'
        opacity={0.4}
      />
      <circle
        cx={676.001}
        cy={1427.2}
        r={12}
        fill='#E3C07E'
        className='saturn-body'
      />
    </g>
    <g className='orbit-container uranus'>
      <circle
        cx={845.855}
        cy={373}
        r={11}
        fill='#7FBCD2'
        className='planet uranus'
      />
    </g>
    <g className='orbit-container neptune'>
      <circle
        cx={1767.5}
        cy={1112.7}
        r={11.5}
        fill='#355E9B'
        className='planet neptune'
      />
    </g>
    <g className='orbit-container pluto'>
      <circle
        cx={1318.5}
        cy={1869.7}
        r={7.5}
        fill='#C3B1A6'
        className='planet pluto'
      />
    </g>
    <defs>
      <filter
        id='a'
        width={140}
        height={140}
        x={930}
        y={930}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset />
        <feGaussianBlur stdDeviation={19} />
        <feColorMatrix values='0 0 0 0 0.952941 0 0 0 0 0.939216 0 0 0 0 0.129412 0 0 0 0.5 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_731_148' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_731_148'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

const memoSolarSystem = memo(SolarSystem);
export default memoSolarSystem;
