import React from 'react';
import Cart from '../Cart/Cart';
import styles from './Modal.module.css';

const Modal = props => {
  return (
    <div className={styles.backdrop}>
      <Cart />
    </div>
  );
};

export default Modal;
