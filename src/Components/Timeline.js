import React from 'react';
import '../index.css';
export default function Timeline() {
  return (
    <div className="timeline items-center">
      <div className="timelineLine"></div>
      <span>
        <button type="button" class="stage"></button>
        <label htmlFor="">Select Repo</label>
      </span>
      <span>
        <button type="button" class="stage"></button>
        <label htmlFor="">Create Tokens</label>
      </span>
      <span>
        <button type="button" class="stage"></button>
        <label htmlFor="">Verify</label>
      </span>
    </div>
  );
}
