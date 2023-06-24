import React from 'react';


interface PlayerProps {
    target: number,
    index: number,
    score: number,
    onScoreChange: (index: number) => void,
}
function Player({ target, index, score, onScoreChange }:PlayerProps) {
    const handleIncrement = () => {
      onScoreChange(index);
    };

    return (
        <div>
          <p>Player {index + 1}</p>
          <p>Score: {score}</p>
          <button onClick={handleIncrement}>Increment Score</button>
          {score === target && <p>You Win!</p>}
        </div>
      );
    }

  export default Player;