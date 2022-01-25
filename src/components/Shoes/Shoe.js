import React from 'react';
import styles from './Shoe.module.css';
import ShoeForm from './ShoeForm';

const Shoe = ({ item, id }) => {
  const price = `$${item.price.toFixed(2)}`;

  return (
    <li className={styles.shoe}>
      <div>
        <h3>{item.name}</h3>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <img className={styles.shoeImg} src={item.url} alt="Shoes images" />
      <div>
        <ShoeForm id={id} />
      </div>
    </li>
  );
};

export default Shoe;
