import React from 'react';
import '../index.css';
export default function Timeline() {
  return (
    <div className="timeline items-center">
      <span>
        <button type="button" class="stage"></button>
        <div htmlFor="">Select Repo</div>
      </span>
      <span>
        <button type="button" class="stage"></button>
        <div htmlFor="">Create Tokens</div>
      </span>
      <span>
        <button type="button" class="stage"></button>
        <div htmlFor="">Verify</div>
      </span>
    </div>
  );
}
