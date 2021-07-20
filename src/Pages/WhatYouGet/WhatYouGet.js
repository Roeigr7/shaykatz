import React from 'react';

import './WhatYouGet.css';
import present from '../../assets/icons/present.svg';
import brain from '../../assets/icons/brain.svg';
import yinyang from '../../assets/icons/yinyang.svg';
const WhatYouGetPage = () => {
  return (
    <div className='container-wyg'>
      <div className='divider divider-wyg' />
      <h3 className='title'>מה תקבלו מההרצאה?</h3>
      <div className='iconsList'>
        <div className='iconItem'>
          <img className='iconImg' src={brain} alt='ds' />
          <p className='iconText'>
            רכישת כלים פרקטיים
            <br />
            לאימון ואילוף הכלב
          </p>
        </div>
        <div className='iconItem'>
          <img className='iconImg' src={yinyang} alt='ds' />
          <p className='iconText'>
            דרכים ליצירת
            <br />
            הרמוניה עם הכלב שלכם
          </p>
        </div>

        <div className='iconItem'>
          <img className='iconImg' src={present} alt='ds' />
          <p className='iconText'>
            הבנה מעמיקה
            <br />
            על הפסיכולוגיה הכלבית
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatYouGetPage;
