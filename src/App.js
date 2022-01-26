import { useState } from 'react';
import Header from './components/Layout/Header';
import Shoes from './components/Shoes/Shoes';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [shoeIsShown, setShoeIsShown] = useState(false);

  const hideModalHandler = () => {
    setShoeIsShown(false);
  };

  const showModalHandler = () => {
    setShoeIsShown(true);
  };

  return (
    <CartProvider>
      {shoeIsShown && <Cart onHide={hideModalHandler} />}
      <Header onShow={showModalHandler} />
      <main>
        <Shoes />
      </main>
    </CartProvider>
  );
}

export default App;
