import React from "react";

import Board from "./Board";

import logo from '../logo/gl-logo.png';
import ship from  '../icons/ship.svg';

var grids= [
  //Array1
  [
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }, 
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ]
  ],
  //Array 2
  [
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }, 
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 }
      ]
  ],
  //Array 3
  [
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }, 
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 1, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ],
      [
        { ship: 0, hit: 0 },
        { ship: 1, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 },
        { ship: 0, hit: 0 }
      ]
  ],
  //End of grids
]

//Get Random Grid
var randomGrid = grids[Math.floor(Math.random()*grids.length)];

class BoardContainer extends React.Component {
  state = {
    turns: 0,
    hits: 0,
    grid: randomGrid,
  };

  onClick = coordinates => {
    const { turns, hits, } = this.state;
    //Split coordinates into sub-strings and parse each element into integers
    const [x, y] = coordinates.split(",").map(el => parseInt(el));
    let grid = [...this.state.grid];

    if (grid[x][y].ship === 1 && grid[x][y].hit === 0) {
        grid[x][y].hit = 1;
        this.setState({ hits: hits + 1 });
    } else if(grid[x][y].ship === 0 && grid[x][y].hit === 0) {
        grid[x][y].hit = 1;
    }

    return  this.setState({ grid, turns: turns + 1 });
  };

  render() {
    const { grid, turns, hits } = this.state;

    return (
      <div className="game-container">
        <div className="gl-title">
          <img src={logo} class="logo" alt="gl-logo"/>
          <img src={ship} class="ship-icon" alt="ship-icon"/>
        </div>
        <div className="scoreboard">
           <div className="col">
              <span>TURNS</span> 
              <span className='score'>{turns}</span>
           </div>
           <div className="col">
             <span>HITS</span>
             <span className="score">{hits} / 13</span>
           </div>
        </div>
        <Board onClick={this.onClick} grid={grid} />
      </div>
    );
  }
}

export default BoardContainer;
