import { useRef } from 'react';

const defaultCanvas = {
  style: {
    width: 320,
    height: 568,
    backgroundColor: '#FFFFFF00',
    backgroundImage: '',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'content-box',
  },
  cmps: [
    {
      // key: getOnlyKey(),
      desc: '文本',
      value: '文本',
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 100,
        height: 30,
        fontSize: 12,
        color: 'red',
      },
    },
  ],
};

class Canvas {
  private canvas: any;

  constructor(_canvas = defaultCanvas) {
    this.canvas = _canvas;
  }

  getCanvas = () => {
    return { ...this.canvas };
  };

  getCanvasCmps = () => {
    return [...this.canvas.cmps];
  };

  setCanvas = (_canvas: any) => {
    Object.assign(this.canvas, _canvas);
  };

  getPublicCanvas = () => ({
    getCanvas: this.getCanvas,
  });
}

export const useCanvas = (canvasProps?: any) => {
  const canvasRef = useRef<any>();
  if (!canvasRef.current) {
    if (canvasProps) {
      canvasRef.current = canvasProps;
    } else {
      const canvas = new Canvas();
      canvasRef.current = canvas.getPublicCanvas();
    }
  }
  return canvasRef.current;
};
