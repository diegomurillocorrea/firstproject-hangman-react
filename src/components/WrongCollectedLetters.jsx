import React from 'react'

const WrongLetters = ( { wrongLetters } ) => {

  return (
    <div>
      <h2 className="text-darkgray">YOU MISSED:</h2>
      <div className="collected-words-container">
        { wrongLetters
          .map( ( letter, i ) => <span className="words" key={ i }>{ letter }</span>)
          .reduce( ( prev, curr ) => prev === null ? [ curr ] : [ prev, curr ], null ) }
      </div>
    </div>
  )
}

export default WrongLetters;
