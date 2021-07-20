import React from 'react';
import logo from '../../assets/logo.png';
import './MainPage.css';
const MainPage = () => {
  return (
    <>
      <div className='mainContainer'>
        <img className='logo' src={logo} alt='logo-ShayKatz' />

        <div className='upperContent'>
          <div className='descriptionText'>
            <p>לפני שאתם מזמינים שוב פעם</p>
            <p>מאלף הביתה רק בשביל שתגלו</p>
            <p>שאת מה שהוא מלמד אתכם</p>
            <p>ראיתם אתמול ביו טיוב, </p>
            <p>אני מזמין אתכם להרצאה</p>
            <p>הקרובה שלי:</p>
          </div>
          <h2 className='quoteTitle'>"הכלב אושר שלי"</h2>
        </div>
      </div>
      <div className='trianglePath' />
    </>
  );
};

export default MainPage;
