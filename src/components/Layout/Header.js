import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mainImg from '../../assets/main.jpg';
import styles from './Header.module.css';

const Header = ({ onShow }) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h2>SHOES</h2>
        <HeaderCartButton onShow={onShow} />
      </header>
      <div className={styles['main-image']}>
        <img src={mainImg} alt="Gdragon" />
      </div>
    </React.Fragment>
  );
};

export default Header;
