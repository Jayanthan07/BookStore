import {useState} from "react";
import css from './bookstore.module.css';
import Cart from './Components/Card';
import Selection from './Components/Selection';

function App() {
  const [cart, setCart] = useState([]);
  const [totalCount, setCount] = useState({});
  return (
    <>
      <div className={css.header}>Book Store</div>
<div className={css.container}>
<div className={css.selection}>
        <Selection setCart={setCart} cart={cart} setCount={setCount} totalCount={totalCount}/>
</div>
        <div className={css.selection}>
        <Cart cart={cart} totalCount={totalCount}/>
        </div>
</div>
    </>
  );
}

export default App;
