import { useState, useEffect } from 'react';

const Tile = ({ letterGuess, wholeWord, correctLetter, getClass }) => {

const [tileClass, setTileClass] = useState("tile");

    useEffect(() => {
        const getTileClass = () => {
            if (wholeWord !== undefined) {
                if (letterGuess === correctLetter) {
                    setTileClass("tile-right");
                } else if (wholeWord.split("").includes(letterGuess)) {
                    setTileClass("tile-in-word");
                } else {
                    setTileClass("tile-not-right");
                }
            }
        }

        const keyDownHandler = (event) => {
            console.log(event.key)
            if (event.key === 'Enter') {
                getTileClass();
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <>
            <div className={tileClass ? tileClass : "tile"}>{letterGuess}</div>
        </>
    );

};

export default Tile;