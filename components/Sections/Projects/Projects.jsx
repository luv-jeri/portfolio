import React from 'react';
import s from './Projects.module.css';
import ParallaxImageGallery from '../../blocks/ParallaxImageGallery';

export default function Projects() {
  const images = [
    'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1601034913836-a1f43e143611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80',
    'https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80',
    'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    'https://images.unsplash.com/photo-1601034913836-a1f43e143611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80',
    'https://images.unsplash.com/photo-1491951931722-5a446214b4e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=467&q=80',
  ];
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
        <div className={s.segment}>
          <div className={s.segmentLeft}>
            <div className={s.content}>
              <div className={s.subTitle}> React Native</div>
              <div className={s.title}>HyreMe</div>
              <div className={s.subtitle}>The all-in-one platform for hiring .</div>
            </div>
            <div className={s.box}>
              <div className={s.details}>
                <ul>
                  <li>Post job for your business or look for a service.</li>
                  <li>
                    HyreMe is a platform that allows you to hire and manage your staff.
                  </li>
                  <li>Easy to use and intuitive interface.</li>
                  <li>The app is available on both iOS and Android.</li>
                </ul>
                <div className={s.buttonContainer}>
                  <button>👈🏻</button>
                  <button>👉🏻</button>
                </div>
              </div>
            </div>
          </div>
          <div className={s.segmentRight}>
            <ParallaxImageGallery images={images}></ParallaxImageGallery></div>
        </div>
      </div>
    </div>
  );
}
