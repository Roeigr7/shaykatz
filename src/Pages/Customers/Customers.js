import React from 'react';
import './Customers.css';
import Divider from '../../components/Divider';
import foot from '../../assets/foot.svg';
import DownTriangleShape from '../../components/DownTriangleShape';
const CustomersPage = () => {
  return (
    <>
      <div className='container-customers'>
        <h3 className='title'>לקוחות משתפים</h3>
        <img className='footCustomers' src={foot} alt='foot-print' />
        <div className='content'>
          <img
            className='footCustomers footRight'
            src={foot}
            alt='foot-print'
          />
          <p className='text'>
            ״שי הוא למעשה מאמן התנהגות של א.נשים. בזכות כך הוא עזר לנו ללמוד
            להבין את צ'יקו טוב יותר ולאחר סדרה של 6 מפגשים התחולל שיפור משמעותי
            בקשר שלנו עם צ'יקו והאווירה בבית נעשתה נינוחה הרבה יותר. לאורך
            התהליך גילינו יכולות מפתיעות של צ'יקו: היכולת לשבת ליד חטיף דקות
            ארוכות מבלי להתנפל עליו או היכולת להישאר רגוע בזמן שיש דפיקות בדלת.
            יותר מהכל, בזכות שי הצלחנו להרגיש בטוחות ורגועות יותר בנוגע לקשר של
            צ'יקו עם ילדנו. אנחנו ממליצות על שי בחום לכל מי שרוצה להכיר את
            הכלב.ה שלכם טוב יותר!״
          </p>
          <p>זוג אמהות לילד בן 11 חודשים</p>
          <Divider />
          <img className='footCustomers footTwo' src={foot} alt='foot-print' />
          <p className='text'>
            ״שי הוא למעשה מאמן התנהגות של א.נשים. בזכות כך הוא עזר לנו ללמוד
            להבין את צ'יקו טוב יותר ולאחר סדרה של 6 מפגשים התחולל שיפור משמעותי
            בקשר שלנו עם צ'יקו והאווירה בבית נעשתה נינוחה הרבה יותר. לאורך
            התהליך גילינו יכולות מפתיעות של צ'יקו: היכולת לשבת ליד חטיף דקות
            ארוכות מבלי להתנפל עליו או היכולת להישאר רגוע בזמן שיש דפיקות בדלת.
            יותר מהכל, בזכות שי הצלחנו להרגיש בטוחות ורגועות יותר בנוגע לקשר של
            צ'יקו עם ילדנו. אנחנו ממליצות על שי בחום לכל מי שרוצה להכיר את
            הכלב.ה שלכם טוב יותר!״
          </p>
          <p>זוג אמהות לילד בן 11 חודשים</p>
        </div>
      </div>
      <DownTriangleShape />
    </>
  );
};

export default CustomersPage;
