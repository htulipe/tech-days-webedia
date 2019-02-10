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
    <h1>De la même façon</h1>
    <Step index={1}>
      <ul>
        <li>
          <strong>handleLoading</strong> rend un message si loading vaut true,
          sinon un composant
        </li>
      </ul>
    </Step>
    <Step index={2}>
      <Code
        value={hocHandleLoadingCode}
        codeMirrorOptions={{ lineNumbers: true }}
      />
    </Step>
    <ul>
      <Step index={3}>
        <li>
          Ces fonctions s'appellent des <strong>Higher Order Components</strong>{' '}
          (HOC)
        </li>
      </Step>
      <Step index={4}>
        <li>Facilement testables unitairement</li>
      </Step>
    </ul>
    <Step index={5}>
      <h2>Comment combiner 2 HOC ?</h2>
    </Step>
  </ContentSlide>
);
