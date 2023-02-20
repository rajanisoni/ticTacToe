import React from 'react';

// import  from './Box.js';
import './Reset.css';

export default function Reset({ message, resetFun }) {
  // console.log(resetFun);
  return (
    <div className="btn-Div">
      <p className="message">{message}</p>
      <span></span>
      <button className="reset-btn" onClick={() => resetFun()}>
        Reset
      </button>
    </div>
  );
}
