import React from 'react';
import { ContentSlide, Step } from 'react-presents';
import Demo from '../demo/Demo';

export default () => (
  <ContentSlide>
    <h1>Le problème à résoudre</h1>
    <Step index={1}>Rendre une liste de films chargée depuis le serveur</Step>
    <Step index={2}>
      <Demo />
    </Step>
  </ContentSlide>
);
