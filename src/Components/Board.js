import React, { useState } from 'react';

import Box from './Box.js';
import './Board.css';

export default function Board({ array, onClick, over, resetFun }) {
  // console.log(resetFun);
  return (
    // array = [null, null,....]
    <div className="board">
      {array.map((elem, idx) => {
        return (
          <Box
            value={elem}
            onClick={() => elem === null && over === false && onClick(idx)}
          />
        );
      })}

     
    </div>
  );
}
