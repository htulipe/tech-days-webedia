import React from 'react';
import { ContentSlide, Step, Code } from 'react-presents';

export default () => (
  <ContentSlide>
    <h1>Retour à nos 2 HOC</h1>

    <ul>
      <Step index={1}>
        <li>Ce sont des fonctions</li>
      </Step>
      <Step index={2}>
        <li>
          Qui prennent en paramètre un composant React et retourne un composant
          React
        </li>
      </Step>
      <Step index={3}>
        <li>Ils sont donc composables</li>
      </Step>
      <Step index={4}>
        <li>Donc...</li>
      </Step>
    </ul>
    <Step index={5}>
      <Code value="const MoviesList = ({ movies }) => <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>" />
      <br />
    </Step>
    <Step index={6}>
      <Code value="const EnhancedMoviesList = handleLoading(handleError(MoviesList))" />
      <br />
    </Step>
    <Step index={7}>
      <Code value="<EnhancedMoviesList error={false} loading={true} movies={[...]}/> // Loading..." />
      <br />
    </Step>
    <Step index={8}>
      <Code value="<EnhancedMoviesList error={true} loading={false} movies={[...]}/> // An error occurred" />
      <br />
    </Step>
    <Step index={9}>
      <Code value="<EnhancedMoviesList error={false} loading={false} movies={[...]}/> // La liste des films" />
      <br />
    </Step>
    <Step index={10}>
      <h2>Par contre, c'est moche!</h2>
    </Step>
  </ContentSlide>
);
