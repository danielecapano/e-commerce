/* eslint-disable react-hooks/exhaustive-deps */
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Order from "./pages/Order";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect } from "react";
import { useShopContext } from "./hooks/useShopContext";
import { ProductProvider } from "./context/ProductContext";

const App = () => {
  const { getAllProducts } = useShopContext();
  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts();
      console.log("La pagina App si è ricaricata");
    };
    fetchProducts();
  }, []);
  return (
    <div className='container-fluid'>
      <ToastContainer autoClose={3000} theme={"colored"} />
      <Navbar />
      <SearchBar />
      <ScrollToTop />

      <ProductProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/order/:orderId' element={<Order />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </div>
  );
};

export default App;