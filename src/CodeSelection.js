import React from 'react';
import './CodeSelection.css';

function CodeSelection(props) {
  function showOptions() {
    console.log('hey!');
  }

  return (
    <span 
      id={props.id}
      className="CodeSelection"
      onClick={() => showOptions()}
    >{props.text} Selected: {props.selected ? 'hey' : 'no'}</span>

  );
}

export default CodeSelection;
