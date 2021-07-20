import React from 'react';
import './AboutMe.css';
import foot from '../../assets/foot.svg';
import aboutMeImg from '../../assets/aboutMeImg.png';
import Triangle from '../../assets/Triangle';

const AboutMePage = () => {
  return (
    <div className='container-about'>
      <div className='dividerAbout' />
      <h3 className='title'>קצת עליי</h3>
      <div className='content'>
        <img className='footImageAbout' src={foot} alt='foot-print' />

        <p className='text'>
          אני מאלף כלבים אשר מאמן אנשים לגדל, לחנך ולאלף את כלבם תוך כדי הבנת
          צרכיהם של חברם הולכי ה-4. התחלתי להתעניין בתחום עוד בגיל 10 כאשר
          קיבלתי את כלבי הראשון, ללא כל ניסיון וידע בדבר גידול וחינוך הכלב בשל
          החוסר בהכוונה, דבר שעורר אצל הכלב בעיות התנהגות והוביל לתקיפה של בני
          אדם. בסופו של דבר, הבנתי שהמצב הנוכחי אינו יכול להימשך כפי שהוא,
          והחלטתי ללכת ללמוד אילוף כלבים באופן מקצועי. בזכות הכלים שרכשתי,
          הצלחתי לאלף ולשקם את הכלב שלי.
        </p>
      </div>
      <img className='aboutImage' src={aboutMeImg} />
      <p className='downText'>
        אני מאמין שאין כלב שאי אפשר לאלף אותו - כל מה שנדרש זה את השיטה הנכונה,
        את הכלים, את הידע ואת ההכוונה המתאימה. המשימה שלי זה להפוך כמה שיותר
        כלבים ובעלי כלבים למאושרים הרבה יותר!
      </p>
      <div className='dividerAbout' />
      <Triangle color='#dbf3f5' />
      <img className='footImage' src={foot} alt='foot-print' />
    </div>
  );
};

export default AboutMePage;
