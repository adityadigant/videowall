import React from 'react';
import './Grid.css';
import VideoPlayer from './VideoPlayer';

function Grid({ rows, columns }) {
  const cells = [];

  for (let i = 0; i < rows; i++) {
    const rowCells = [];
    for (let j = 0; j < columns; j++) {
      rowCells.push(
        <div className="cell" key={`cell-${i}-${j}`}>
        <VideoPlayer videoURL={"https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8"}/>
        </div>
      );
    }
    cells.push(
      <div className="row" key={`row-${i}`}>
        {rowCells}
      </div>
    );
  }

  return (
    <div className="grid">
      {cells}
    </div>
  );
}

export default Grid;
