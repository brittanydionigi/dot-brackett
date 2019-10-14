import React, { useState, useEffect } from 'react';
import './App.css';
import HighlightWrapper from './HighlightWrapper';
import CodeSelection from './CodeSelection';

let syntaxOptions = ['stockInvestments[stockSymbol]', 'stockInvestments.stockSymbol'];

function PracticeArea() {
    const [selectedFillIn, setSelectedFillIn] = useState(null);


    function bubbleClick(codeSelection) {
        setSelectedFillIn(codeSelection.id);
    }

  return (
    <div id="practice-area">
        <div id="prompt">
            <h3>Practice Exercise #1: Stock Investments {selectedFillIn}</h3>
            <p className="prompt-description">Write a function called <code>getTotalInvested</code> that takes in a stock symbol as an argument and outputs the total amount invested in that stock. e.g. If I invoke  <code>getTotalInvested('amzn')</code> I should get back 1000 because that stock costs 100 dollars and I have 10 shares.</p>
            <pre>
            <code>{`
                let stockInvestments = {
                    amzn: { price: 100, shares: 10 },
                    bidu: { price: 200, shares: 150 },
                    appl: { price: 300, shares: 25 }
                };
                    
                function getTotalInvested(stockSymbol) {
                    let stockDetails = `}<CodeSelection id="fillIn-A" selected={'fillIn-A' === selectedFillIn} text="access the correct stock information"></CodeSelection>{`;
                    let totalInvested = `}<CodeSelection id="fillIn-B" text="access the price of stockDetails"></CodeSelection>{` * `}<CodeSelection id="fillIn-C" text="access the shares of stockDetails"></CodeSelection>{`;
                    return totalInvested;
                }
                getTotalInvested('amzn');
    `}</code>
            </pre>
            <button id="run-code">Run the Code!</button>
        </div>
    </div>
    );
}

export default PracticeArea;
