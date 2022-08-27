import { useState, useEffect } from 'react';

const Stats = ({ finalGuessNumber, winAmount, winRate }) => {

    return (
        <div>
            <p>Number of Wins:</p>
            <p>{winRate}</p>
        </div>
    )

};

export default Stats;