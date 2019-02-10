import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const hocHandleLoadingCode = `  const handleLoading = (SomeComponent) => {
    return ({ loading, ...props }) => {
        if (loading) {
            return <div>Loading...</div>
        }
        return <SomeComponent {...props} />
    }
  }`;

export default () => (
  <ContentSlide>
    <h1>Exemple</h1>

    <Step index={1}>
      <Code value="const addOne = (x) => x + 1" />
    </Step>
    <br />
    <Step index={2}>
      <Code value="const double = (x) => x * 2" />
    </Step>
    <br />
    <Step index={3}>
      <Code value="addOne(double(3)) // => 7" />
    </Step>
    <br />
    <Step index={4}>
      <ul>
        <li>
          Deux fonctions sont composables si elles ont le même type d'entrée et
          de sortie
        </li>
      </ul>
    </Step>
  </ContentSlide>
);
