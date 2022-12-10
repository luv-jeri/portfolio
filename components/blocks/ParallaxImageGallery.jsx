import React, { useRef, useEffect } from 'react';
import anime from 'animejs';
import s from './ParallaxImageGallery.module.css';
import { useParallax, ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function ParallaxImageGallery({ images }) {
  const imagesRef = useRef(null);
  const animeRef = useRef(null);

  useEffect(() => {
    animeRef.current = anime({
      targets: '#photo',
      translateX : [0, 20],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 5000,
    });
  }, []);

  useEffect(() => {
    // randomly arrange images
    const images = imagesRef.current.children;
    const imagesArray = Array.from(images);

    imagesArray.forEach((image) => {
      // rando, x between -200 and 200
      const random = Math.floor(Math.random() * 400) - 200;
      // ramdome bewteen 200 and 300
      const randomMarginTop = Math.floor(Math.random() * 50) - 25;
      // randome Height between 200 and 400
      const randomHeight = Math.floor(Math.random() * 200) + 200;
      image.style.transform = `translate(${random}px, ${0}px)`;
      image.style.marginTop = `${randomMarginTop}px`;
      // image.style.height = `${randomHeight}px`;
    });
  }, []);

  const [cont, setCont] = React.useState(null);

  useEffect(() => {
    const cont = document.getElementById('container');
    setCont(cont);
  }, []);

  return (
    <div id='parent' className={s.parent}>
      <ParallaxProvider scrollContainer={cont}>
        <div className={s.fadeUp}></div>
        <div id='container' className={s.container} ref={imagesRef}>
          {images.map((image, index) => {
            // randome speed between -5 and 5
            const randomSpeed = Math.floor(Math.random() * 30) - 15;
            const randomChance = Math.floor(Math.random() * 100) > 50 ? true : false;
            return (
              <div className={s.images} key={index}>
                <Parallax speed={randomSpeed} rotateY={['0deg', '-20deg']}>
                  <img className={s.image} id='photo' src={image} alt='parallax image' />
                </Parallax>
              </div>
            );
          })}
        </div>
      </ParallaxProvider>
    </div>
  );
}
