import React from 'react';
import Card from '../UI/Card';
import styles from './AvailableShoes.module.css';
import Shoe from './Shoe';

const DUMMY_SHOES = [
  {
    id: 'm1',
    name: "Nike Air Force 1 '07 Lv8 Emb",
    description: 'Men Shoes',
    price: 22.99,
    url: 'https://images.footlocker.com/is/image/FLEU/314104092904_01?wid=763&hei=538&fmt=png-alpha',
  },
  {
    id: 'm2',
    name: 'Under Armour Curry Flow Run',
    description: 'Men Shoes',
    price: 16.5,
    url: 'https://images.footlocker.com/is/image/FLEU/314209504704_01?wid=763&hei=538&fmt=png-alpha',
  },
  {
    id: 'm3',
    name: 'Nike Canyon Sandal',
    description: 'Men Flip-Flops and Sandals',
    price: 12.99,
    url: 'https://images.footlocker.com/is/image/FLEU/314625973004_01?wid=763&hei=538&fmt=png-alpha',
  },
  {
    id: 'm4',
    name: 'Nike Zoom Gt Run',
    description: 'Men Shoes',
    price: 18.99,
    url: 'https://images.footlocker.com/is/image/FLEU/314104071304_01?wid=763&hei=538&fmt=png-alpha',
  },
];

const AvailableShoes = props => {
  return (
    <Card className={styles.shoes}>
      <ul>
        {DUMMY_SHOES.map(item => (
          <Shoe id={item.id} key={item.id} item={item} />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableShoes;
