import { useContext } from "react";
import styles from "./Shoe.module.css";
import ShoeForm from "./ShoeForm";
import CartContext from "../../store/cart-context";

const Shoe = ({ item, id }) => {
  const cartCtx = useContext(CartContext);

  const price = `$${item.price.toFixed(2)}`;

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: item.name,
      amount: amount,
      price: item.price
    });
  };

  return (
    <li className={styles.shoe}>
      <div>
        <h3>{item.name}</h3>
        <div className={styles.description}>{item.description}</div>
        <div className={styles.price}>{price}</div>
      </div>
      <img className={styles.shoeImg} src={item.url} alt="Shoes images" />
      <div>
        <ShoeForm onAddToCart={addItemToCartHandler} id={id} />
      </div>
    </li>
  );
};

export default Shoe;
