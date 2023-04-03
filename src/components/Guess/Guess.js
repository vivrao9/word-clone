import React from "react";

// import range utility
import { range } from '../../utils.js';

// import checkGuess
import { checkGuess } from '../../game-helpers';

// import constants
// import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function Guess({ guess, answer }) {
  
  return (
    <p className="guess">
  
      {range(5).map((num) => (
      // className initially just "cell"
      <span className={
        "cell " + (checkGuess(guess, answer) ? checkGuess(guess, answer)[num]['status'] : '')
      } key={num}>
        {guess ? guess[num] : undefined}
      </span>
    )
  )}

    </p>
  )}

export default Guess;
