import React from 'react';
import './CodeSelection.css';

function CodeSelection(props) {
  function showOptions() {
    console.log('display modal of syntax options');
  }

  return (
    <div 
      id={props.id}
      className="CodeSelection"
    >{props.text}</div>

  );
}

export default CodeSelection;
