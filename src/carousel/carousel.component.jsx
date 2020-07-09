import React, { useState, useEffect } from 'react';
import './carousel.styles.scss';

import nextIcon from '../assets/next.png';
import prevIcon from '../assets/prev.png';

function Carousel({ items, delay }) {

  let [index, setIndex] = useState(0);

  useEffect(() => {

    let timer = setInterval(() => {           
      handleNext();
    }, delay);

    return () => {
      clearInterval(timer);
    }

  }, [index])

  const handleNext = () => {
    let idx = index + 1 === items.length ? 0 : index + 1
    setIndex(idx);
  }

  const handlePrev = () => {
    let idx = index - 1 === -1 ? items.length - 1 : index - 1
    setIndex(idx);
  }

  return (
    <div className="carousel-container">
      {items.map((item, i) => {
        return (
          <div key={i} className="carousel-item fade" style={{ display: i !== index ? 'none' : 'block' }}>
            <img alt="carousel-item" src={item}></img>
          </div>
        )
      })}
      <img src={nextIcon} className="next-button" onClick={handleNext}></img>
      <img src={prevIcon} className="prev-button" onClick={handlePrev}></img>
    </div>
  )
}

export default Carousel
