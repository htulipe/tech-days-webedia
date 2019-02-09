import React from 'react';
import { ContentSlide } from 'react-presents';
import Code from 'react-presents/dist/commonjs/Code';
import Step from 'react-presents/dist/commonjs/Step';

const dimLines = {
  0: [[0, 11]],
  1: [[1, 10]],
  2: [[4, 10]],
  3: [[7, 10]],
  4: [[10, 10]]
};

const code = `  const MoviesList = ({error, loading, movies}) => {
    if (error) {
      return <div>An error occurred</div>
    }
    if (loading) {
      return <div>Loading...</div>
    }
    if (!movies || !movies.length) {
      return <div>No data!</div>;
    }
    return <ul>{movies.map(movie => <li>{movie.title}</li>)}</ul>
  }`;

export default ({ stepIndex }) => (
  <ContentSlide>
    <h1>Approche impérative</h1>
    <Code
      value={code}
      dimLines={dimLines[stepIndex]}
      codeMirrorOptions={{ lineNumbers: true }}
    />
    <br />
    <Step index={6}>
      Et maintenant si je veux rendre d'autres listes ? Des séries, des cinémas,
      des utilisateurs...
    </Step>
    {[1, 2, 3, 4, 5].map(idx => (
      <Step index={idx} maxIndex={idx + 1} key={idx}>
        <br />
      </Step>
    ))}
  </ContentSlide>
);
