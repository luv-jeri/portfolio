import React from 'react';
import s from './Nav.module.css';
// import Lottie from 'react-lottie';
// import heartLottie from '../../assets/heartLottie.json';

export default function Nav() {
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
