import { useContext } from 'react';
import { CanvasContext } from '@/store/Content';

export const useCanvasData = () => {
  const canvas = useContext(CanvasContext) as any;
  return canvas.getCanvas();
};

export const useCanvasCmps = () => {
  const canvas = useContext(CanvasContext) as any;
  return canvas.CanvasCmps();
};
