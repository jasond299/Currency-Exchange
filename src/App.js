import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Entry from "./component/entry.js";

function App() {
  const [entry, setEntries] = useState(null);

  useEffect(() => {
    fetch(
      "https://api.currencyfreaks.com/latest?apikey=c4f5138487d1422bb0a743a001dbe280&symbols=CAD,EUR,IDR,JPY,CHF,GBP"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEntries(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      {/* {entry && JSON.stringify(entry.rates.IDR)} */}
      {entry && (
        <Entry
          currency={"CAD"}
          buy={entry.rates.CAD * 1.05}
          rate={entry.rates.CAD}
          sell={entry.rates.CAD * 0.95}
        />
      )}
      {entry && (
        <Entry
          currency={"EUR"}
          buy={entry.rates.EUR * 1.05}
          rate={entry.rates.EUR}
          sell={entry.rates.EUR * 0.95}
        />
      )}
      {entry && (
        <Entry
          currency={"IDR"}
          buy={entry.rates.IDR * 1.05}
          rate={entry.rates.IDR}
          sell={entry.rates.IDR * 0.95}
        />
      )}
      {entry && (
        <Entry
          currency={"JPY"}
          buy={entry.rates.JPY * 1.05}
          rate={entry.rates.JPY}
          sell={entry.rates.JPY * 0.95}
        />
      )}
      {entry && (
        <Entry
          currency={"CHF"}
          buy={entry.rates.CHF * 1.05}
          rate={entry.rates.CHF}
          sell={entry.rates.CHF * 0.95}
        />
      )}
      {entry && (
        <Entry
          currency={"GBP"}
          buy={entry.rates.GBP * 1.05}
          rate={entry.rates.GBP}
          sell={entry.rates.GBP * 0.95}
        />
      )}
    </div>
  );
}

export default App;
