import React from 'react';
import './Walla.css';
import walla from '../../assets/walla.png';
import wallaArticle from '../../assets/wallaArticle.png';
import foot from '../../assets/foot.svg';
import Triangle from '../../assets/Triangle';
const WallaPage = () => {
  return (
    <div className='container-walla'>
      <img className='wallaLogo' src={walla} alt='walla-logo' />
      <img
        className='article'
        src={wallaArticle}
        alt='walla-article-shay-katz'
      />
      <Triangle className='brown' color='#FED599' />
    </div>
  );
};

export default WallaPage;
