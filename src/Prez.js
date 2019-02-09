import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Presentation, Slide, TitleSlide } from 'react-presents';
import SlideDemo from './slides/SlideDemo';
import SlideCodeHighlights from './slides/SlideCodeHighlights';

const Prez = () => (
  <Presentation>
    <Slide
      component={() => (
        <TitleSlide>
          <h1>Composer vos composants React</h1>
          <h2>Une approche fonctionnelle de l'UI</h2>
        </TitleSlide>
      )}
    />
    <Slide component={SlideDemo} />
    <Slide component={SlideCodeHighlights} />
    <Slide
      component={() => (
        <TitleSlide>
          <h1>L'approche fonctionnelle</h1>
        </TitleSlide>
      )}
    />
  </Presentation>
);

export default hot(Prez);
