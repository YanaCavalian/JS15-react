import React, { useState } from "react";
import { Table } from "./Table";

function App() {
  const [cellTable, setCellTable] = useState(null);

  const handleClick = (e) => {
    setCellTable(e.target.textContent);
  };

  return (
    <div>
      <Table onClick={handleClick} />
      <div> Cell number: {cellTable}</div>
    </div>
  );
}

export default App;
