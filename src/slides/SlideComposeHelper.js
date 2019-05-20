import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const composeSignatureCode = `const composed = compose(...funcs)
composed(initialArg);`;

const composeMovieList = `const enhancer = compose(
  handleError,
  handleLoading
)
const EnhancedMoviesList = enhancer(MoviesList)`;

const composeMath = `const doubleAndAddOne = compose(addOne, double);
doubleAndAddOne(3) // => 7`;

export default () => (
  <ContentSlide>
    <h1>Un helper à la rescousse</h1>
    <Step index={1}>
      <Code value={composeSignatureCode} />
      <br />
    </Step>
    <Step index={2}>
      <Code value={composeMath} />
      <br />
    </Step>
    <Step index={3}>
      <Code value={composeMovieList} />
      <br />
    </Step>
  </ContentSlide>
);
