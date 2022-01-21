import React from "react";

const sty = {
  display: "flex",
  justifyContent: "center",
};

const cell = {
  display: "table-cell",
  width: "150px",
  color: "white",
  fontWeight: "bold",
  fontSize: "18px",
};

const Header = ({ currency, buy, rate, sell }) => {
  return (
    <div style={sty}>
      <p style={cell}>{currency}</p>
      <p style={cell}>{buy}</p>
      <p style={cell}>{rate}</p>
      <p style={cell}>{sell}</p>
    </div>
  );
};

export default Header;
