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
        <div className={s.icon}>🌦️</div>
      </div>
      <div className={s.right}>
        <div>
          <div className={s.subTitle}> React Native</div>
          <div className={s.title}>HyreMe</div>
          <div className={s.subtitle}>
            The all-in-one platform for hiring and managing your staff.
          </div>
        </div>
        <div className={s.box}>
          <div className={s.gallery}></div>
          <div className={s.details}>
            <p>
              <li>Post job for your business or look for a service.</li>
              <li>HyreMe is a platform that allows you to hire and manage your staff.</li>
              <li>Easy to use and intuitive interface.</li>
              <li>The app is available on both iOS and Android.</li>
            </p>
            <div className={s.buttonContainer}>
              <button>👈🏻</button>
              <button>👉🏻</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
