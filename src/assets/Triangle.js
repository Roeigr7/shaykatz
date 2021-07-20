import React from 'react';

const Triangle = ({ color, className }) => {
  return (
    <div
      className={`triangle ${className&&className}`}
      style={{ backgroundColor: color }}
    />
  );
};
export default Triangle;
