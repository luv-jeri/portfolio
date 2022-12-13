import React from 'react';
import s from './About.module.css';
import MobileMock from '../../blocks/MobileMock/MobileMock';
import ChatApp from '../../blocks/ChatApp/ChatApp';

export default function About() {
  return (
    <div className={s.container}>
      <MobileMock>
        <ChatApp />
      </MobileMock>
    </div>
  );
}
