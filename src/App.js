import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Entry from "./component/entry.js";
import Header from "./component/header.js";

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
      <div className="Table">
        <Header
          className="tr"
          currency={"Currency"}
          buy={"We Buy"}
          rate={"Exchange Rate"}
          sell={"We Sell"}
        />

        {entry && (
          <Entry
            className="tr"
            currency={"CAD"}
            buy={(entry.rates.CAD * 1.05).toFixed(4)}
            rate={(entry.rates.CAD * 1).toFixed(4)}
            sell={(entry.rates.CAD * 0.95).toFixed(4)}
          />
        )}
        {entry && (
          <Entry
            className="tr"
            currency={"EUR"}
            buy={(entry.rates.EUR * 1.05).toFixed(4)}
            rate={(entry.rates.EUR * 1).toFixed(4)}
            sell={(entry.rates.EUR * 0.95).toFixed(4)}
          />
        )}
        {entry && (
          <Entry
            className="tr"
            currency={"IDR"}
            buy={(entry.rates.IDR * 1.05).toFixed(4)}
            rate={(entry.rates.IDR * 1).toFixed(4)}
            sell={(entry.rates.IDR * 0.95).toFixed(4)}
          />
        )}
        {entry && (
          <Entry
            className="tr"
            currency={"JPY"}
            buy={(entry.rates.JPY * 1.05).toFixed(4)}
            rate={(entry.rates.JPY * 1).toFixed(4)}
            sell={(entry.rates.JPY * 0.95).toFixed(4)}
          />
        )}
        {entry && (
          <Entry
            className="tr"
            currency={"CHF"}
            buy={(entry.rates.CHF * 1.05).toFixed(4)}
            rate={(entry.rates.CHF * 1).toFixed(4)}
            sell={(entry.rates.CHF * 0.95).toFixed(4)}
          />
        )}
        {entry && (
          <Entry
            className="tr"
            currency={"GBP"}
            buy={(entry.rates.GBP * 1.05).toFixed(4)}
            rate={(entry.rates.GBP * 1).toFixed(4)}
            sell={(entry.rates.GBP * 0.95).toFixed(4)}
          />
        )}
      </div>
      <p className="footer">rates are based from 1 USD</p>
      <p className="footer">
        This application uses API from https://currencyfreaks.com/
      </p>
    </div>
  );
}

export default App;
