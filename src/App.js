import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home/Home"
import Detail from './pages/detail/Detail';
import Cart from './pages/cart/Cart';
import Header from './components/header/Header';
import CartProvider from './context/CartContext';
import Products from './pages/products/Products';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products />} />
            <Route path="/accessories" element={<Home />} />
            <Route path="/contact" element={<Home />} />

            <Route path="/detail/:slug" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
