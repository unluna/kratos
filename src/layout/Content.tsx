import react from 'react';
import styles from './index.less';
import { useCanvasData } from '@/store/hooks';

export default () => {
  const canvas = useCanvasData();
  const { style, cmps } = canvas;
  return (
    <main className={styles.content}>
      {cmps.map((item: any) => `${item.value}`)}
    </main>
  );
};
