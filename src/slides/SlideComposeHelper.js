import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const composeSignatureCode = `const enhancer = compose(...funcs) // const doubleAndAddOne = compose(addOne, double)
enhancer(initialArg); // doubleAndAddOne(3) => 7`;

const composeCode = `const enhancer = compose(
  handleError,
  handleLoading
)
const EnhancedMoviesList = enhancer(MoviesList)`;

export default () => (
  <ContentSlide>
    <h1>Un helper à la rescousse</h1>

    <Step index={1}>
      <Code value="const EnhancedMoviesList = handleLoading(handleError(MoviesList))" />
      <br />
    </Step>

    <Step index={2}>
      <Code value={composeSignatureCode} />
      <br />
    </Step>
    <Step index={3}>
      <Code value={composeCode} />
      <br />
    </Step>
  </ContentSlide>
);
