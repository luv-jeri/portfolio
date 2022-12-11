import React from 'react';
import s from './Hero.module.css';

export default function Hero() {
  return (
    <div className={s.container}>
      <div className={s.fadeUp}></div>
      <div className={s.sayHello}>
        <h3>Hey, I am Sanjay</h3>
        <h1>Let's make something good together </h1>
        <h2>Fullstack,App Dev, Desginer</h2>
      </div>
      <div className={s.me}>
        <img
          src='https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
          width={200}
        />
      </div>
    </div>
  );
}
