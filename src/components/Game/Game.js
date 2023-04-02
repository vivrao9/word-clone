import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import SearchInput from '../SearchInput';
import Guesses from '../Guesses';

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
  <Guesses guesses={guesses}/>

  <SearchInput handleGuessSubmit={handleGuessSubmit} />
  </>
}

export default Game;
