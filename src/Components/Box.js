import React from 'react';
import './Box.css';

export default function Box({ value, onClick }) {
  // console.log(value);
  const style = value == 'X' ? 'xbox box' : 'obox box';
  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}
