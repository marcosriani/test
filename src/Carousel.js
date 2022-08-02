import React, { useState, useRef } from 'react';
import Card from './Card';
import Nav from './Nav';

const dataArray = [
  {
    src: './img/img1.jpg',
    title: 'Product 01',
    description:
      ' How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img2.jpg',
    title: 'Product 02',
    description:
      '2 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img3.jpg',
    title: 'Product 03',
    description:
      '3 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img4.jpg',
    title: 'Product 04',
    description:
      '4 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img5.jpg',
    title: 'Product 05',
    description:
      '5 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img6.jpg',
    title: 'Product 06',
    description:
      '6 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img7.jpg',
    title: 'Product 07',
    description:
      '7 How to and tutorial videos of cool css effects, web design ideas',
  },
  {
    src: './img/img8.jpg',
    title: 'Product 08',
    description:
      '8 How to and tutorial videos of cool css effects, web design ideas',
  },
];

const Carousel = () => {
  const [data, setData] = useState(dataArray);

  const myRef = useRef(' ');

  const prevClick = () => {
    const slide = myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if (slide.scrollLeft <= 0) {
      slide.scrollLeft = slide.scrollWidth;
    }
  };

  const nextClick = () => {
    const slide = myRef.current;
    slide.scrollLeft += slide.offsetWidth;
    if (slide.scrollLeft >= slide.scrollWidth - slide.offsetWidth) {
      slide.scrollLeft = 0;
    }
  };

  return (
    <div className='wrapper'>
      <div className='app' ref={myRef}>
        <Card data={data} />
      </div>
      <Nav prev={prevClick} next={nextClick} />
    </div>
  );
};

export default Carousel;
