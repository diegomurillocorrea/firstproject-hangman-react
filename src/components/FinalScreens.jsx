import React, { useEffect } from 'react';
import { checkWin } from './ScreenCheker';

const FinalScreens = ( { correctLetters, wrongLetters, selectedWord, setPlayable, playAgain } ) => {
  let finalMessage = '';
  let playable = true;

  if( checkWin( correctLetters, wrongLetters, selectedWord ) === 'win' ) {
    finalMessage = "NUEVO JUEGO";
    playable = false;
  } else if( checkWin( correctLetters, wrongLetters, selectedWord ) === 'lose' ) {
    finalMessage = "GAME OVER";
    playable = false;
  }

  useEffect( () => {
    setPlayable( playable );
  } );

  return (
    <div className="screen" style={ finalMessage !== '' ? { display:'flex' } : { display: 'none' }}>
        <h2 className="screen-title">{ finalMessage }</h2>
        <button onClick={ playAgain } className="screen-button">NEW WORD</button>
    </div>
  );
};

export default FinalScreens;
