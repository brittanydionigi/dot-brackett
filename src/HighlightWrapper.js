import React from 'react';
import './App.css';
import 'highlight.js/styles/a11y-dark.css';
import Highlight from 'react-highlight'
import CodeSelection from './CodeSelection';

function HighlightWrapper(props) {
  return (
    <Highlight className='javascript' id={props.selectedFillIn}>{`
            let stockInvestments = {
                amzn: { price: 100, shares: 10 },
                bidu: { price: 200, shares: 150 },
                appl: { price: 300, shares: 25 }
            };
                
            function getTotalInvested(stockSymbol) {
                let stockDetails = `}<CodeSelection id="fillIn-A" selected={'fillIn-A' === props.selectedFillIn} text="access the correct stock information"></CodeSelection>{`;
                let totalInvested = `}<CodeSelection id="fillIn-B" text="access the price of stockDetails"></CodeSelection>{` * `}<CodeSelection id="fillIn-C" text="access the shares of stockDetails"></CodeSelection>{`;
                return totalInvested;
            }
            getTotalInvested('amzn');
    `}</Highlight>
  );
}

export default HighlightWrapper;



            