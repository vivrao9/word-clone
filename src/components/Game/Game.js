import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
// import { range } from '../../utils.js';

// import components
import SearchInput from '../SearchInput';
import Guesses from '../Guesses';
// import Guess from '../Guess';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleGuessSubmit(guess) {
    setGuesses([...guesses, guess]);
  }
  
  return <>
  <Guesses guesses={guesses} answer={answer}/>

  <SearchInput handleGuessSubmit={handleGuessSubmit} />
  </>
}

export default Game;
