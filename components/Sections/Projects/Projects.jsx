import React from 'react';
import s from './Projects.module.css';

export default function Hero() {
  return (
    <div className={s.container}>
     
      <div className={s.left}>
        <div className={s.icon}>💖</div>
        <div className={s.icon}>🚀</div>
        <div className={s.icon}>⭐</div>
        <div className={s.icon}>🦄</div>
      </div>
      <div className={s.right}>
        <h1>Project Name</h1>
        <div></div>
      </div>
    </div>
  );
}
