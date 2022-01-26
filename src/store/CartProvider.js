import CartContext from './cart-context';

const CartProvider = props => {
  const addItemToCartHandler = item => {};

  const removeItemFromCartHander = id => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHander,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
