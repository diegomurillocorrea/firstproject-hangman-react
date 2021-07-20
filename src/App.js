import React, { useState, useEffect } from 'react';
import HangmanFigure from './components/HangmanFigure';
import WrongCollectedLetters from './components/WrongCollectedLetters';
import Word from './components/Word';
import Triangle from "./components/Triangle"
import FinalScreens from './components/FinalScreens';

const words = [ "elaniin", "react", "frontend", "project", "hangman" ];
let selectedWord = words[ Math.floor( Math.random() * words.length ) ];

function App() {
  const [ playable, setPlayable ] = useState( true );
  const [ correctLetters, setCorrectLetters ] = useState( [] );
  const [ wrongLetters, setWrongLetters ] = useState( [] );
  const [ randomWord, setRandomWord ] = useState( "" );

  const loadRandomWord = async () => {
    await fetch( "https://random-word-api.herokuapp.com/word?number=1" )
    .then( response => response.json() )
    .then( receivedRandomWord => setRandomWord( receivedRandomWord.toString() ) )
  };

  useEffect( () => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if ( playable && keyCode >= 65 && keyCode <= 90 ) {
        const letter = key.toLowerCase();
        if ( selectedWord.includes( letter ) ) {
          if ( !correctLetters.includes( letter ) ) {
            setCorrectLetters(currentLetters => [ ...currentLetters, letter ]);
          }
        } else {
          if ( !wrongLetters.includes( letter ) ) {
            setWrongLetters(currentLetters => [ ...currentLetters, letter ] );
          };
        };
      };
    };
    window.addEventListener( 'keydown', handleKeydown );

    loadRandomWord();

    return () => window.removeEventListener( 'keydown', handleKeydown );
  }, [ correctLetters, wrongLetters, playable ] );

  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    selectedWord = randomWord;
  }

  return (
    <main className="main-container">
      <div className="top-container">
        <HangmanFigure wrongLetters={ wrongLetters } />
        <WrongCollectedLetters wrongLetters={ wrongLetters } />
      </div>
      <div className="bottom-container">
        <Word selectedWord={ selectedWord } correctLetters={ correctLetters } />
        <Triangle />
      </div>
      <FinalScreens correctLetters={ correctLetters } wrongLetters={ wrongLetters } selectedWord={ selectedWord } setPlayable={setPlayable} playAgain={ playAgain } />
    </main>
  );
}

export default App;
