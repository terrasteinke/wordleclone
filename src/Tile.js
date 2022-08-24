import { useState, useEffect } from 'react';

const Tile = ({letterGuess, wholeWord, correctLetter, getClass}) => {


//gets the tiles to change onChange not onSubmit
 /* 
    let tileClass;

    if (wholeWord !== undefined) {
       if (letterGuess === correctLetter) {
            tileClass="tile-right";
        } else if (wholeWord.split("").includes(letterGuess)) {
            tileClass="tile-in-word";
        } else {
            tileClass="tile";
        }
    }*/

    //attempt at onClickListener to change on "enter"

    const [tileClass, setTileClass] = useState("tile");

    useEffect(() => {
        const getTileClass = () => {
            if (wholeWord !== undefined) {
                if (letterGuess === correctLetter) {
                     setTileClass("tile-right");
                 } else if (wholeWord.split("").includes(letterGuess)) {
                    setTileClass("tile-in-word");
                } else {
                    setTileClass("tile");
                }
        }
    }

        const keyDownHandler = (event) => {
            console.log(event.key)
            if (event.key === 'Enter') {
                console.log("entered");
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
            <div className={tileClass ? tileClass : "tile" }>{letterGuess}</div>
              </>
 );

};

export default Tile;