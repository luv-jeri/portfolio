import styles from './Wrapper.module.css';
import { useEffect, useLayoutEffect, useState, useRef, useCallback } from 'react';
import anime from 'animejs';
import useTheme from '../../context/Theme.context';

export default function Main({ children }) {
  const tileEdge = 70;
  const { switch_, colorScheme } = useTheme();

  const [colums, setCol] = useState(0),
    [rows, setRow] = useState(0);

  const animationRef = useRef(null);

  const handleResize = useCallback(() => {
    setCol(Math.floor(document.body.clientWidth / tileEdge));
    setRow(Math.floor(document.body.clientHeight / tileEdge));
  }, [tileEdge]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize, tileEdge]);

  useEffect(() => {
    setCol(Math.floor(document.body.clientWidth / tileEdge));
    setRow(Math.floor(document.body.clientHeight / tileEdge));
  }, []);

  const onClick = (index) => {
    animationRef.current = anime({
      targets: '#tile',
      backgroundColor: colorScheme.colors.tile,
      delay: anime.stagger(30, { grid: [colums, rows], from: index || 'center' }),
      autoplay: false,
      duration: 100,
    });

    switch_();
    animationRef.current.restart();
  };

  return (
    <div
      className={styles.wrapper}
      id='tiles'
      style={{
        gridTemplateColumns: `repeat(${colums}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
    >
      {Array.from({ length: colums * rows }, (v, i) => {}).map((v, i) => (
        <div
          onClick={() => {
            onClick(i);
          }}
          id='tile'
          className={`${styles.tile}`}
          key={i}
        ></div>
      ))}
      <div className={styles.children}>{children}</div>
    </div>
  );
}