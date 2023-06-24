import React, { useState } from 'react';
import Player from './player/Player';

interface gameSettings {
    numPlayers: number,
    target: number
}

function ScoreKeeper({ numPlayers, target }: gameSettings) {
    const defaultTarget = 10;
    const actualTarget = target || defaultTarget;
    const playerScores = new Array(numPlayers).fill(0);
    const [scoreboard, setScoreboard] = useState(playerScores);
    const handleScores = (index: number) => {
        setScoreboard((prevScoreboard) => {
            const newScoreboard = [...prevScoreboard];
            newScoreboard[index] += 1;
            if(newScoreboard[index]===actualTarget){
                alert("Player: "+(index+1)+" has Won!")
            }
            return newScoreboard;
        });
    };
    return (
        <div>
            <ul>
                {scoreboard.map((playerScore, index) => (
                    <div key={index + 1} >
                        <Player target={actualTarget} index={index} onScoreChange={handleScores} score={playerScore} />
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ScoreKeeper;
