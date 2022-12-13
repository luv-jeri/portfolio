import React from 'react';
import s from './Projects.module.css';
import ParallaxImageGallery from '../../blocks/ParallaxImageGallery/ParallaxImageGallery';

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

  const project = [
    {
      icon: '💖',
      name: 'HyreMe',
      description:
        'A platform for freelancers to find jobs and employers to find freelancers.',
      images: images,
      notes: [
        'Built with React, Node, Express, and MongoDB',
        'Implemented a custom authentication system with JWT',
        'Implemented a custom payment system with Stripe',
        'Implemented a custom file upload system with AWS S3',
        'Implemented a custom email system with SendGrid',
        'Implemented a custom chat system with Socket.io',
      ],
    },
    {
      icon: '🚀',
      name: 'SpaceX',
      description:
        'A platform for freelancers to find jobs and employers to find freelancers.',
      images: images,
      notes: [
        'Built with React, Node, Express, and MongoDB',
        'Implemented a custom authentication system with JWT',
        'Implemented a custom payment system with Stripe',
        'Implemented a custom file upload system with AWS S3',
        'Implemented a custom email system with SendGrid',
        'Implemented a custom chat system with Socket.io',
      ],
    },
    {
      icon: '⭐',
      name: 'Star Wars',
      description:
        'A platform for freelancers to find jobs and employers to find freelancers.',
      images: images,
      notes: [
        'Built with React, Node, Express, and MongoDB',
        'Implemented a custom authentication system with JWT',
        'Implemented a custom payment system with Stripe',
        'Implemented a custom file upload system with AWS S3',
        'Implemented a custom email system with SendGrid',
        'Implemented a custom chat system with Socket.io',
      ],
    },
    {
      icon: '🦄',
      name: 'Unicorn',
      description:
        'A platform for freelancers to find jobs and employers to find freelancers.',
      images: images,
      notes: [
        'Built with React, Node, Express, and MongoDB',
        'Implemented a custom authentication system with JWT',
        'Implemented a custom payment system with Stripe',
        'Implemented a custom file upload system with AWS S3',
        'Implemented a custom email system with SendGrid',
        'Implemented a custom chat system with Socket.io',
      ],
    },
    {
      icon: '🌦️',
      name: 'Weather',
      description:
        'A platform for freelancers to find jobs and employers to find freelancers.',
      images: images,
      notes: [
        'Built with React, Node, Express, and MongoDB',
        'Implemented a custom authentication system with JWT',
        'Implemented a custom payment system with Stripe',
        'Implemented a custom file upload system with AWS S3',
        'Implemented a custom email system with SendGrid',
        'Implemented a custom chat system with Socket.io',
      ],
    },
  ];

  const icons = project.map((item) => item.icon);
  return (
    <div className={s.container}>
      <div className={s.fadeUp}></div>
      <div className={s.projectIcons}>
        {icons.map((icon) => (
          <div className={s.icon}>{icon}</div>
        ))}
      </div>
      <div className={s.projectContent}>
        <div className={s.projectHead}>
          <div className={s.subTitle}>React Native</div>
          <div className={s.title}>HyreMe</div>
          <div className={s.subtitle}>The all-in-one platform for hiring .</div>
        </div>
        <div className={s.projectDetails}>
          <ul className={s.notes}>
            <li className={s.note}>Post job for your business or look for a service.</li>
            <li className={s.note}>
              HyreMe is a platform that allows you to hire and manage your staff.
            </li>
            <li className={s.note}>Easy to use and intuitive interface.</li>
            <li className={s.note}>The app is available on both iOS and Android.</li>
          </ul>
          <div className={s.projectButtons}>
            <button>Open App</button>
            <button>Watch Demo</button>
          </div>
        </div>
      </div>
      <div className={s.projectGallery}>
        <ParallaxImageGallery images={images}></ParallaxImageGallery>
      </div>
    </div>
  );
}
