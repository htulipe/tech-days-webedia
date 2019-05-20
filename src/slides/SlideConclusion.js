import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

export default () => (
  <ContentSlide>
    <h1>Conclusion</h1>
    <Step index={1}>
      <h2>Points positifs</h2>
    </Step>
    <ul>
      <Step index={2}>
        <li>Composant plus atomique</li>
      </Step>
      <Step index={3}>
        <li>Plus réutilisabe grâce aux HOC</li>
      </Step>
      <Step index={4}>
        <li>Plus testable (HOC et enhancer)</li>
      </Step>
    </ul>
    <Step index={5}>
      <h2>Points négatifs</h2>
    </Step>
    <ul>
      <Step index={6}>
        <li>3 composants React rendus au lieu d'un seul</li>
      </Step>
      <Step index={7}>
        <li>Peut être déroutant</li>
      </Step>
    </ul>

    <Step index={8}>
      <h2>Plus généralement</h2>
    </Step>
    <ul>
      <Step index={9}>
        <li>Ce n'est qu'un bout de la programmation fonctionnelle</li>
      </Step>
      <Step index={10}>
        <li>C'est un paradigme qui est bon à connaître</li>
      </Step>
    </ul>
  </ContentSlide>
);
