import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const compoNoProps = `const Greetings = () => <div>Hello guys!</div> // <Greetings />`;
const compoProps = `const Greetings = ({ name }) => <div>Hello {name}</div> // <Greetings name="John" />`;
const compoPropsAndSubCompo = `const Greetings = ({ name, flavors }) => (
    <div>
        Hello {name}, choose an ice cream flavor:
        <FlavorSelector flavors={flavors} />
    </div>
)`;

export default () => (
  <ContentSlide>
    <h1>Petit rappel sur les composants React</h1>
    <Step index={1}>
      <ul>
        <li>Ce sont des fonctions</li>
      </ul>
    </Step>
    <Step index={2}>
      <Code value={compoNoProps} />
    </Step>
    <Step index={3}>
      <ul>
        <li>Paramétrées par un objet de propriétés (aka props)</li>
      </ul>
    </Step>
    <Step index={4}>
      <Code value={compoProps} />
    </Step>
    <Step index={5}>
      <ul>
        <li>Qui peuvent rendre d'autres composants</li>
      </ul>
    </Step>
    <Step index={6}>
      <Code value={compoPropsAndSubCompo} />
    </Step>
  </ContentSlide>
);
