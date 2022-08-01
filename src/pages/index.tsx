import Header from '@/layout/Header';
import Left from '@/layout/Left';
import Content from '@/layout/Content';
import Right from '@/layout/Right';
import { useCanvas } from '@/store/canvas';
import styles from './index.less';
import { CanvasContext } from '@/store/Content';

export default function IndexPage() {
  const canvas = useCanvas();

  return (
    <div>
      <CanvasContext.Provider value={canvas}>
        <Header />
        <div className={styles.wrapper}>
          <Left />
          <Content />
          <Right />
        </div>
      </CanvasContext.Provider>
    </div>
  );
}
