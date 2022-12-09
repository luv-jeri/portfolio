import React, { useEffect, useRef } from 'react';
import s from './Nav.module.css';
import anime from 'animejs';
import useTheme from '../../context/Theme.context';
// import Lottie from 'react-lottie';
// import heartLottie from '../../assets/heartLottie.json';

export default function Nav() {
  const { switch_, colorScheme } = useTheme();
  const animationRef = useRef(null);
  const backgroundAnimationRef = useRef(null);

  useEffect(() => {
    animationRef.current = anime({
      targets: `.${s.letter}`,
      color: colorScheme.colors.secondary,
      delay: anime.stagger(100),
      autoplay: false,
      duration: 100,
    });
    animationRef.current.restart();

    backgroundAnimationRef.current = anime({
      targets: `.${s.nav}`,
      backgroundColor: colorScheme.colors.background,
      transition: 'background-color 0.5s ease-in-out',
      autoplay: false,
      duration: 700,
    });
    backgroundAnimationRef.current.restart();
  }, [colorScheme.colors.text]);

  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: heartLottie,
  //     rendererSettings: {
  //       preserveAspectRatio: 'xMidYMid slice',
  //     },
  //   };

  return (
    <nav className={s.nav}>
      <div className={s.logo}>
        {/* <Lottie options={defaultOptions} height={40} width={40} /> */}
        <span className={s.letter}>N</span>
        <span className={s.letter}>a</span>
        <span className={s.letter}>m</span>
        <span className={s.letter}>a</span>
        <span className={s.letter}>s</span>
        <span className={s.letter}>t</span>
        <span className={s.letter}>e</span>
        <span className={s.letter}>y</span>
      </div>
      <div className={s.message}>
        Hey Good to see you here <span className={s.heart}>❤️ </span>
        App is in delopment mode, will be live soon
      </div>
    </nav>
  );
}
