import { useState, useEffect } from 'react';

const LetterRow = ({word, isActive}) => {

    const zeroToFourArr = [...Array(5).keys()];

    return (
        <div>
                <div className='tileContainer'>
                    {zeroToFourArr.map((idx) => {
                        return word[idx] ? (
                            <div key={idx} className="tile">{word[idx]}</div>) : (
                                <div key={idx} className="tile">
                                    </div>
                            );
                    })}
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
