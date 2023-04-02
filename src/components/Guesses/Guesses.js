import React from "react";

// import SearchInput from '../SearchInput';

function Guesses({ guesses }) {
  return <>
    <div className="guess-results">
    {guesses.map((submission, index) => {
      return (<p class="guess" key={index}>{submission}</p>)
    })}      
    </div>
  </>;
}

export default Guesses;
