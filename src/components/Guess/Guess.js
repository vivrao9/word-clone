import React from "react";

// import range utility
import { range } from '../../utils.js';

// import constants
// import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

function Guess({ guess }) {
  return (
    <p className="guess">
  
      {range(5).map((num) => (
      <span className="cell" key={num}>
        {guess ? guess[num] : undefined}
      </span>
    )
  )}

    </p>
  )}

export default Guess;
