import React from "react";

const HangmanFigure = ( { wrongLetters } ) => {
    const errors = wrongLetters.length

    return (
        <div className="hangman-container">
            <img src={ hangmanImages[ 0 ] } alt="bar.png" />
            { errors > 0 && <img src={ hangmanImages[ 1 ] } alt="head.png" /> }
            { errors > 1 && <img src={ hangmanImages[ 2 ] } alt="head.png" /> }
            { errors > 2 && <img src={ hangmanImages[ 3 ] } alt="head.png" /> }
            { errors > 3 && <img src={ hangmanImages[ 4 ] } alt="head.png" /> }
            { errors > 4 && <img src={ hangmanImages[ 5 ] } alt="head.png" /> }
            { errors > 5 && <img src={ hangmanImages[ 6 ] } alt="head.png" /> }
            { errors > 6 && <img src={ hangmanImages[ 7 ] } alt="head.png" /> }
            { errors > 7 && <img src={ hangmanImages[ 8 ] } alt="head.png" /> }
            { errors > 8 && <img src={ hangmanImages[ 9 ] } alt="head.png" /> }
            { errors > 9 && <img src={ hangmanImages[ 10 ] } alt="head.png" /> }
            { errors > 10 && <img src={ hangmanImages[ 11 ] } alt="head.png" /> }
        </div>
    );
};

const hangmanImages = [
    require( "../img/bar.png" ).default,
    require( "../img/head.png" ).default,
    require( "../img/neck.png" ).default,
    require( "../img/corpus.png" ).default,
    require( "../img/right-arm.png" ).default,
    require( "../img/left-arm.png" ).default,
    require( "../img/right-hand.png" ).default,
    require( "../img/left-hand.png" ).default,
    require( "../img/right-leg.png" ).default,
    require( "../img/left-leg.png" ).default,
    require( "../img/right-foot.png" ).default,
    require( "../img/left-foot.png" ).default
];

export default HangmanFigure;