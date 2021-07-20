import React from 'react';
import Triangle from '../assets/Triangle';

const DownTriangleShape = () => {
  return (
    <>
      <Triangle className='triangleBlue' color='#a1cdd0' />

      <div style={{ backgroundColor: '#a1cdd0', height: '50px' }} />
      <div className='triangleTwo'>
        <Triangle className='triangleWhite' color='white' />
      </div>
    </>
  );
};

export default DownTriangleShape;
