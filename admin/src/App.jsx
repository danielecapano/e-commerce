import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navabar from "./components/Navabar";
import Add from "../src/pages/Add";
import List from "../src/pages/List";
import Orders from "../src/pages/Orders";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import { useAdminContext } from "./hook/useAdminContext";
import { useEffect } from "react";
import Home from "./pages/Home";
import ShowProduct from "./pages/ShowProduct";

const App = () => {
  const { token } = useAdminContext();
  console.log(token);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer autoClose={2000} theme={"colored"} />
      {!token && <Login />}
      {token && (
        <div className='container-fluid'>
          <div className='grid grid-cols-[1fr_4fr] grid-rows-[auto_1fr] min-h-screen'>
            <Navabar />
            <Sidebar />
            <div className='mx-8 my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
                <Route path='/product/:productId' element={<ShowProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
