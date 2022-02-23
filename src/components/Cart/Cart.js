import { useContext, useState } from "react";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CheckOut from "./CheckOut";

const Cart = ({ onHide }) => {
  const [showCheckOut, setShowCheckOut] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0; // to check Items in cart

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const showCheckOutHandler = () => {
    setShowCheckOut(true);
  };

  const hideCheckOutHandler = () => {
    setShowCheckOut(false);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={onHide}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={showCheckOutHandler}>
          Order
        </button>
      )}
    </div>
  );

  return (
    <Modal onHide={onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      {showCheckOut && <CheckOut onHide={hideCheckOutHandler} />}
      {!showCheckOut && modalActions}
    </Modal>
  );
};

export default Cart;
