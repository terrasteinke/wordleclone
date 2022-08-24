import { useState, useEffect } from 'react';
import Tile from './Tile';

const LetterRow = ({ word, correctWord, getClass, isActive }) => {

    const zeroToFourArr = [...Array(5).keys()];

    return (
        <div>
            <div className='tileContainer'>
                {zeroToFourArr.map((idx) => {
                    return word[idx] ? (
                        <Tile key={idx} letterGuess={word[idx]} correctLetter={correctWord[idx]} wholeWord={correctWord} getClass={getClass} />
                    ) : <div key={idx} className="tile"></div>;
                }
                )
                }
            </div>
            {/* <div className='tile'>{guess}</div> */}
        </div>
    )

};

export default LetterRow;


/*const [guess, setGuess] = useState("\u00a0\u00a0");

useEffect(() => {
    const keyDownHandler = event => {
        setGuess(event.key);
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
        document.removeEventListener('keydown', keyDownHandler);
    };
}, []);*/
