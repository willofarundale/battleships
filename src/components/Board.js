import React from "react";
import PropTypes from "prop-types";

import hit from '../icons/hit.svg';
import missed from '../icons/missed.svg';

const Board = ({ onClick, grid }) => {

  return (
    <div className="board">
      {grid.map((row, i) => (
        <div className="row" key={i}>
          {row.map((cell, i2) => (
            //onClick provides coordinates
            <div
              className="col"
              key={i2}
              onClick={() => onClick(`${i},${i2}`)}
            >
              {cell.hit === 0 && <span>_</span>}
              {cell.ship === 0 && cell.hit === 1 && <span className="missed"><img src={missed} alt="missed-icon"/></span>}
              {cell.ship === 1 && cell.hit === 1 && <span className="hit"><img src={hit} alt="hit-icon"/></span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

//Set Default Props
Board.defaultProps = {
  grid: []
};

export default Board;
