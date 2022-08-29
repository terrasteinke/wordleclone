import { useState, useEffect } from 'react';

const Stats = ({ finalGuessNumber, winAmount, winRate, longestWinStreak, currentWinStreak }) => {

    return (
        <div>
            <p>Number of Wins:</p>
            <p>{winRate}</p>
            <p>Longest Win Streak:</p>
            <p>{longestWinStreak}</p>
            <p>Current Win Streak:</p>
            <p>{currentWinStreak}</p>
        </div>
    )

};

export default Stats;