'use client';
import React, { useRef, useEffect, useMemo } from 'react';
import { WebGLMetaballs } from './WebGLMetaBalls';

interface IState {
  radiusDivider: number;
  smallCircleRadius: number;
  distributionRadius: number;
  xSpeed: number;
  ySpeed: number;
  ballCount: number;
  r: number;
  g: number;
  b: number;
  webGLNotSupported: boolean;
  canvasWidth: number;
  canvasHeight: number;
}

const Metaballs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const state: IState = useMemo(
    () => ({
      ballCount: 5,
      smallCircleRadius: 100,
      distributionRadius: 90,
      xSpeed: 1,
      ySpeed: 1,
      radiusDivider: 15,
      r: 0.34,
      g: 0.5,
      b: 0.89,
      webGLNotSupported: false,
      canvasWidth: typeof window !== `undefined` ? window.innerWidth : 0,
      canvasHeight: typeof window !== `undefined` ? window.innerHeight : 0,
    }),
    []
  );

  const webGLMetaballs = useMemo(() => new WebGLMetaballs(state), [state]);

  useEffect(() => {
    webGLMetaballs.cancelAll();

    const canvasElem = canvasRef.current;
    if (canvasElem) {
      webGLMetaballs.initialize(canvasElem);
    }

    return () => {
      webGLMetaballs.cancelAll();
    };
  }, [webGLMetaballs]);

  return (
    <div
      style={{
        height: `100vh`,
        overflow: `hidden`,
      }}
    >
      <canvas ref={canvasRef} id='main'></canvas>
    </div>
  );
};

export default Metaballs;
