import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import User from './components/User';
import Product from './components/Product';
import Cart from './components/Cart';
import ProductInfo from './components/ProductInfo';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="products" element={<Product />} />
        <Route path="product_info" element={<ProductInfo />} />
        <Route path="products/cart/:product_id" element={<Cart />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;


// http://source.unsplash.com/800x500/?food