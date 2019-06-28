import React, { Component } from 'react';
import Cell from "./Cell.jsx";


const Row = ({ row, play }) => {
    return (
      <tr>
        {row.map((cell, i) => <Cell key={i} value={cell} index={i} play={play} />)}
      </tr>
    );
  };

  export default Row;