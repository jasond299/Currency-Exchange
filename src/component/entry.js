import React from "react";

const sty = {
  display: "flex",
  justifyContent: "center",

  gap: "30px",
};

const Entry = ({ currency, buy, rate, sell }) => {
  return (
    <div style={sty}>
      <h2>{currency}</h2>
      <p>{buy}</p>
      <p>{rate}</p>
      <p>{sell}</p>
    </div>
  );
};

export default Entry;
