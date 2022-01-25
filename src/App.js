import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Shoes />
      </main>
    </Fragment>
  );
}

export default App;
