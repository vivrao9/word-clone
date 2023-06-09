import React from "react";

function SearchInput({ handleGuessSubmit, lastGuess, answer, gameState }) {
  const [guess, setGuess] = React.useState('');

  return <>
    <form className='guess-input-wrapper'
    onSubmit={event => {
      // prevent page from refreshing
      event.preventDefault();

      // log input field to console
      handleGuessSubmit(guess);

      // reset input field
      setGuess('');
    }}>

  <label htmlFor="guess-input">Enter guess:</label>
  <input id="guess-input"
      type="text"
      required
      maxLength={5}
      pattern="[a-zA-z]{5}"
      title="Five letter word!"
      value={guess}
      onChange={event => {
        const nextGuess = event.target.value.toUpperCase();
        setGuess(nextGuess);
        }}
      disabled={gameState === 'done!'}
        />
  </form>

</>
}

export default SearchInput;
