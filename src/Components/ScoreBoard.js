import React from 'react';
import './ScoreBoard.css';

export default function ScoreBoard({ xScore, oScore, xPlaying }) {
  return (
    <div className="scoreboard">
      <p className={`score x-color ${xPlaying && 'active'} `}>
        X Score {xScore}
      </p>
      <span className={`score o-color ${!xPlaying && 'active'} `}>
        O Score {oScore}
      </span>
    </div>
  );
}
