import React from "react";

const sty = {
  display: "flex",
  justifyContent: "center",
};

const cell = {
  display: "table-cell",
  width: "150px",
  font: "18px",
  color: "white",
};

const Entry = ({ currency, buy, rate, sell }) => {
  return (
    <div style={sty}>
      <p style={cell}>{currency}</p>
      <p style={cell}>{buy}</p>
      <p style={cell}>{rate}</p>
      <p style={cell}>{sell}</p>
    </div>
  );
};

export default Entry;
