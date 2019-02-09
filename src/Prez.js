import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Presentation, Slide } from 'react-presents';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';

const Prez = () => (
  <Presentation>
    <Slide component={Slide1} />
    <Slide component={Slide2} />
  </Presentation>
);

export default hot(Prez);
