import React from 'react';

const Divider = ({ color }) => {
  return (
    <div
      style={{
        position: 'relative',

        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        width: '70%',
        height: '1px',
        zIndex: '1000',
        margin: '5% auto 5% auto',
        backgroundColor: 'black',
      }}
    />
  );
};

export default Divider;
