import React from "react";
// import SearchInput from "../SearchInput/SearchInput";

function Banner({guesses, numOfUsedGuesses, answer, gameState, setGameState}) {

  if (guesses.at(-1) === answer)  {
    setGameState('done!');

    return  (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfUsedGuesses} guesses</strong>.
        </p>
      </div>
    )
  }

  else if (numOfUsedGuesses === 6)  {
    setGameState('done!');
    
    return (
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>
  )}
}

export default Banner;
