import React from 'react';

const Word = ( { selectedWord, correctLetters } ) => {

    return (
        <div className="displayed-words-container">
            <span className="displayed-words"></span>
            <span className="displayed-words"></span>
            <span className="displayed-words"></span>
            <span className="displayed-words"></span>
        {selectedWord.split( '' ).map( ( letter, i ) => {
            return (
            <span className="displayed-words bg-darkgray" key={ i }>
                { correctLetters.includes( letter ) ? letter : ''}
            </span>
            )
        } ) }
        </div>
    );
};

export default Word;
