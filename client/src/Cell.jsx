import React, { Component } from 'react';

const Cell = ({ value, index, play }) => {
    let color = 'background';
    if (value === 1) { color = 'tomato';} 
    else if (value === 2) { color = 'royal';}
    return (
      <td>
        <div className="cell" onClick={() => {play(index)}}>
          <div className={color}></div>
        </div>
      </td>
    );
  };

  export default Cell;