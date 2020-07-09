import React from 'react';
import './App.css';
import Carousel from './carousel/carousel.component';
import { images } from './const';

function App() {
  return (
    <div className="App">
      <Carousel items={images} delay={4000} />
    </div>
  );
}

export default App;
