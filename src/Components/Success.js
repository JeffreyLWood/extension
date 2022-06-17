import React, { useState } from 'react';
import '../index.css';
import Transfer from './Transfer';
export default function Success(props) {
  let { amount, currency, repo } = props;
  let [transfer, setTransfer] = useState(false);

  if (transfer) {
    return <Transfer repo={repo} currency={currency} />;
  }
  return (
    <div className="content  items-center">
      <div className="section">
        <span className="bigText items-center">{`${amount} ${currency}`}</span>
        <span className="items-center">
          <img src="../../icons/success.png" className="success" />
        </span>
        <span className="items-center">{repo} Successfully Tokenized!</span>
        <span className="items-center">
          <button className="startButton" onClick={() => setTransfer(true)}>
            Transfer Tokens
          </button>
        </span>
      </div>
    </div>
  );
}
