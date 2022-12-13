import s from './ChatApp.module.css';
import anime from 'animejs';
import { useEffect, useState, useRef } from 'react';

const message = [
  {
    id: 1,
    message: 'Hello',
    time: '12:00',
    isSender: true,
  },
  {
    id: 2,
    message: 'Hi',
    time: '12:01',
    isSender: false,
  },
  {
    id: 3,
    message: 'How are you?',
    time: '12:02',
    isSender: true,
  },
  {
    id: 4,
    message: 'I am fine',
    time: '12:03',
    isSender: false,
  },
  {
    id: 5,
    message: 'What about you?',
    time: '12:04',
    isSender: true,
  },
  {
    id: 6,
    message: 'I am also fine',
    time: '12:05',
    isSender: false,
  },
  {
    id: 7,
    message: 'How is your family?',
    time: '12:06',
    isSender: true,
  },
  {
    id: 8,
    message: 'They are fine',
    time: '12:07',
    isSender: false,
  },
  {
    id: 9,
    message: 'What are you doing?',
    time: '12:08',
    isSender: true,
  },
  {
    id: 10,
    message: 'I am learning React',
    time: '12:09',
    isSender: false,
  },
  {
    id: 11,
    message: 'What is React?',
    time: '12:10',
    isSender: true,
  },
  {
    id: 12,
    message: 'It is a JavaScript library',
    time: '12:11',
    isSender: false,
  },
  {
    id: 13,
    message: 'What is JavaScript?',
    time: '12:12',
    isSender: true,
  },
  {
    id: 14,
    message: 'It is a programming language',
    time: '12:13',
    isSender: false,
  },
  {
    id: 15,
    message: 'What is programming language?',
    time: '12:14',
    isSender: true,
  },
  {
    id: 16,
    message: 'It is a language to write programs',
    time: '12:15',
    isSender: false,
  },
  {
    id: 17,
    message: 'What is program?',
    time: '12:16',
    isSender: true,
  },
  {
    id: 18,
    message: 'It is a set of instructions to do a task',
    time: '12:17',
    isSender: false,
  },
  {
    id: 19,
    message: 'What is a task?',
    time: '12:18',
    isSender: true,
  },
  {
    id: 20,
    message: 'It is something to be done',
    time: '12:19',
    isSender: false,
  },
  {
    id: 21,
    message: 'What is to be done?',
    time: '12:20',
    isSender: true,
  },
  {
    id: 22,
    message: 'It is a phrase used to express future tense',
    time: '12:21',
    isSender: false,
  },
  {
    id: 1,
    message: 'Hello',
    time: '12:00',
    isSender: true,
  },
  {
    id: 2,
    message: 'Hi',
    time: '12:01',
    isSender: false,
  },
  {
    id: 3,
    message: 'How are you?',
    time: '12:02',
    isSender: true,
  },
  {
    id: 4,
    message: 'I am fine',
    time: '12:03',
    isSender: false,
  },
  {
    id: 5,
    message: 'What about you?',
    time: '12:04',
    isSender: true,
  },
  {
    id: 6,
    message: 'I am also fine',
    time: '12:05',
    isSender: false,
  },
  {
    id: 7,
    message: 'How is your family?',
    time: '12:06',
    isSender: true,
  },
  {
    id: 8,
    message: 'They are fine',
    time: '12:07',
    isSender: false,
  },
  {
    id: 9,
    message: 'What are you doing?',
    time: '12:08',
    isSender: true,
  },
  {
    id: 10,
    message: 'I am learning React',
    time: '12:09',
    isSender: false,
  },
  {
    id: 11,
    message: 'What is React?',
    time: '12:10',
    isSender: true,
  },
  {
    id: 12,
    message: 'It is a JavaScript library',
    time: '12:11',
    isSender: false,
  },
  {
    id: 13,
    message: 'What is JavaScript?',
    time: '12:12',
    isSender: true,
  },
  {
    id: 14,
    message: 'It is a programming language',
    time: '12:13',
    isSender: false,
  },
  {
    id: 15,
    message: 'What is programming language?',
    time: '12:14',
    isSender: true,
  },
  {
    id: 16,
    message: 'It is a language to write programs',
    time: '12:15',
    isSender: false,
  },
  {
    id: 17,
    message: 'What is program?',
    time: '12:16',
    isSender: true,
  },
  {
    id: 18,
    message: 'It is a set of instructions to do a task',
    time: '12:17',
    isSender: false,
  },
  {
    id: 19,
    message: 'What is a task?',
    time: '12:18',
    isSender: true,
  },
  {
    id: 20,
    message: 'It is something to be done',
    time: '12:19',
    isSender: false,
  },
  {
    id: 21,
    message: 'What is to be done?',
    time: '12:20',
    isSender: true,
  },
  {
    id: 22,
    message: 'It is a phrase used to express future tense',
    time: '12:21',
    isSender: false,
  },
];

const ChatApp = () => {
  const scroll = useRef(null);
  const chatRef = useRef(null);

  return (
    <div className={s.chatApp}>
      <div className={s.header}>
        <div className={s.backArrow}>{`👈🏻`}</div>
        <img
          className={s.dp}
          src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        />
        <div className={s.name}>Sanjay</div>
      </div>
      <div ref={chatRef} className={s.chatSection}>
        {message.map((msg) => (
          <div className={msg.isSender ? s.sender : s.receiver}>
            <div className={s.message}>{msg.message}</div>
            <div className={s.time}>{msg.time}</div>
          </div>
        ))}
      </div>
      <div className={s.messageInput}>
        <input className={s.input} type='text' placeholder='Type a message'></input>
      </div>
    </div>
  );
};

export default ChatApp;
