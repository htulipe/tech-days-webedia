import React from 'react';
import { ContentSlide, Code, Step } from 'react-presents';

const dimLines = {
  0: [[0, 8]],
  1: [[1, 7]],
  2: [[4, 7]],
  3: [[7, 7]]
};

const code = `  const MoviesList = ({ error, loading, movies }) => {
    if (error) {
      return <div>An error occurred</div>
    }
    if (loading) {
      return <div>Loading...</div>
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
    {[1, 2, 3].map(idx => (
      <Step index={idx} maxIndex={idx + 1} key={idx}>
        <br />
      </Step>
    ))}
  </ContentSlide>
);
