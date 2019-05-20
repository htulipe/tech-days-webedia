import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Presentation, Slide, TitleSlide } from 'react-presents';
import SlideDemo from './slides/SlideDemo';
import SlideHoCSample from './slides/SlideHoCSample';
import SlideReminderReact from './slides/SlideReminderReact';
import SlideLikewiseOtherHocs from './slides/SlideLikewiseOtherHocs';
import SlideCompositionExample from './slides/SlideCompositionExample';
import SlideImperativeMethod from './slides/SlideImperativeMethod';
import SlideCompositionHoc from './slides/SlideCompositionHoc';
import SlideComposeHelper from './slides/SlideComposeHelper';
import SlideConclusion from './slides/SlideConclusion';

const Prez = () => (
  <Presentation>
    <Slide
      component={() => (
        <TitleSlide>
          <h1>Composez vos composants React</h1>
          <h2>Une approche fonctionnelle de l'UI</h2>
          <br />
          <em>Hadrien Tulipe - Equipe Allociné</em>
        </TitleSlide>
      )}
    />
    <Slide component={SlideReminderReact} />
    <Slide component={SlideDemo} />
    <Slide component={SlideImperativeMethod} />
    <Slide
      component={() => (
        <TitleSlide>
          <h1>L'approche fonctionnelle</h1>
        </TitleSlide>
      )}
    />
    <Slide
      component={() => (
        <TitleSlide>
          <h2>Les Higher Order Components</h2>
        </TitleSlide>
      )}
    />
    <Slide component={SlideHoCSample} />
    <Slide component={SlideLikewiseOtherHocs} />
    <Slide
      component={() => (
        <TitleSlide>
          <h2>La compositition de fonction</h2>
        </TitleSlide>
      )}
    />
    <Slide component={SlideCompositionExample} />
    <Slide component={SlideCompositionHoc} />
    <Slide component={SlideComposeHelper} />
    <Slide component={SlideConclusion} />
    <Slide
      component={() => (
        <TitleSlide>
          <h2>Merci!</h2>
        </TitleSlide>
      )}
    />
  </Presentation>
);

export default hot(Prez);
