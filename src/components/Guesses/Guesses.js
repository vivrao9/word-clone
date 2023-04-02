import React from "react";

// import constants
import { NUM_OF_GUESSES_ALLOWED } from '../../constants.js';

// import range utility
import {range} from '../../utils.js';

// import SearchInput from '../SearchInput';
import Guess from '../Guess';

function Guesses({ guesses }) {
  return <>
    <div className="guess-results">
    {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess guess={guesses[num]} key={num}/>
    ))}
    </div>
  </>;
}

export default Guesses;
