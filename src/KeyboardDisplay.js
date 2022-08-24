import React from "react"

const KeyboardDisplay = ({  }) => {

    return (
        <div className="keyboard-container">

            <div className="first-row">
                <button className="keyboard-button">q</button>
                <button className="keyboard-button">w</button>
                <button className="keyboard-button">e</button>
                <button className="keyboard-button">r</button>
                <button className="keyboard-button">t</button>
                <button className="keyboard-button">y</button>
                <button className="keyboard-button">u</button>
                <button className="keyboard-button">i</button>
                <button className="keyboard-button">o</button>
                <button className="keyboard-button">p</button>
                <button className="functional-button">&#9003;</button>
            </div>
            <div id="second-row" className="first-row">
                <button className="keyboard-button">a</button>
                <button className="keyboard-button">s</button>
                <button className="keyboard-button">d</button>
                <button className="keyboard-button">f</button>
                <button className="keyboard-button">g</button>
                <button className="keyboard-button">h</button>
                <button className="keyboard-button">j</button>
                <button className="keyboard-button">k</button>
                <button className="keyboard-button">l</button>
                <button className="functional-button">enter</button>
            </div>
            <div id="third-row" className="first-row">
                <button className="keyboard-button">z</button>
                <button className="keyboard-button">x</button>
                <button className="keyboard-button">c</button>
                <button className="keyboard-button">v</button>
                <button className="keyboard-button">b</button>
                <button className="keyboard-button">n</button>
                <button className="keyboard-button">m</button>
            </div>

        </div>
    )
}

export default KeyboardDisplay;
