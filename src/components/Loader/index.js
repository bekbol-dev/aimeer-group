import React from 'react';

const Loader = () => {
  return (
    <svg style={{margin: 'auto', display: 'block', shapeRendering: 'auto'}} width="40px" height="40px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="#31a739" strokeWidth="10" r="35" strokeDasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
     </svg>
  );
};

export default Loader;