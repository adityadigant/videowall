import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  const [rows, setRows] = useState(3);
  const [columns, setColumns] = useState(3);
  const [tempRow, setTempRow] = useState(3)
  const [tempColumn, setTempColumn] = useState(3
    )
  useEffect(() => {
    document.title = "Video Wall";
  }, []);

  const handleRowsChange = (event) => {
    let value = parseInt(event.target.value);
    value = Math.min(value, 15);
    setTempRow(value);
  };

  const handleColumnsChange = (event) => {
    let value = parseInt(event.target.value);
    value = Math.min(value, 15);
    setTempColumn(value);
  };

  function handleCreate(){
    setColumns(tempColumn)
    setRows(tempRow)
  }
  return (
    <div className="app-container">
      <div>
        <h2 style={{ color: "White" }}>Create Video Wall</h2>
        <div style={{ display: "flex" }}>
          <div>
            <label style={{ color: "White" }}>
              Rows:
              <div>
                <input
                  type="number"
                  value={tempRow}
                  onChange={handleRowsChange}
                  maxLength="15"
                  className="input-row"
                />
              </div>
            </label>
          </div>
          <div>
            <label style={{ color: "White" }}>
              Columns:
              <div>
                <input
                  type="number"
                  value={tempColumn}
                  onChange={handleColumnsChange}
                  maxLength="15"
                  className="input-row"
                />
              </div>
            </label>
          </div>
          <button className="create-button" onClick={handleCreate}>Create</button>
        </div>

        <div className="defaultGrid">

          <span className="dGrid create-button" onClick={()=>{setRows(2);setColumns(3)}}>2x3</span>
          <span className="dGrid create-button" onClick={()=>{setRows(3);setColumns(4)}}>3x4</span>
          <span className="dGrid create-button" onClick={()=>{setRows(4);setColumns(5)}}>4x5</span>
          <span className="dGrid create-button" onClick={()=>{setRows(5);setColumns(6)}}>5x6</span>




        </div>
      </div>
      <Grid rows={rows} columns={columns} />
    </div>
  );
}

export default App;
