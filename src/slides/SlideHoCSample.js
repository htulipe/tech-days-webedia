import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  3: [[0, 7]],
  4: [[0, 1], [6, 7]],
  5: [[0, 0], [7, 7]]
};

const hocHandleErrorCode = `  const handleError = (SomeComponent) => {
    return ({ error, ...otherProps }) => {
        if (error) {
            return <div>An error occurred</div>
        }
        return <SomeComponent {...otherProps} />
    }
  }`;

export default ({ stepIndex }) => (
  <ContentSlide>
    <h1>Découper le problème</h1>
    <ul>
      <Step index={1}>
        <li>Si j'ai une erreur, rendre un message</li>
      </Step>
      <Step index={2}>
        <li>Sinon rendre quelque chose d'autre</li>
      </Step>
    </ul>
    <Step index={3}>
      <Code
        value={hocHandleErrorCode}
        dimLines={dimLines[stepIndex]}
        codeMirrorOptions={{ lineNumbers: true }}
      />
    </Step>
    <Step index={7}>
      <ul>
        <li>
          <strong>handleError</strong> est une fonction qui prend en paramètre
          un composant et en renvoie un autre
        </li>
      </ul>
    </Step>
    <Step index={8}>
      <Code value="const Greetings = ({ name }) => <div>Hello {name}</div>" />
    </Step>
    <br />
    <Step index={9}>
      <Code value="const EnhancedGreetings = handleError(Greetings)" />
    </Step>
    <br />
    <Step index={10}>
      <Code
        value={`<EnhancedGreetings error={true} name="John" /> // <div>An error occurred</div> `}
      />
    </Step>
    <br />
    <Step index={11}>
      <Code
        value={`<EnhancedGreetings error={false} name="John" /> // <div>Hello John</div>`}
      />
    </Step>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(idx => (
      <Step index={idx} maxIndex={idx + 1} key={idx}>
        <br />
      </Step>
    ))}
  </ContentSlide>
);
