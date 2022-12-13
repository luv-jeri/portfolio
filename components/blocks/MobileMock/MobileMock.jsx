import React from 'react';
import s from './MobileMock.module.css';

export default function MobileMock({ side, children }) {
  return (
    <div
      className={s.mobileMockBody}
      style={{
        width: '350px',
      }}
    >
      <div className={s.mobileMockBodyInner}>
        <div className={s.application}>{children}</div>
      </div>
    </div>
  );
}
