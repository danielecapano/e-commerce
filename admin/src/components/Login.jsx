import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useAdminContext } from "../hook/useAdminContext";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { backendUrl, setToken } = useAdminContext();

  console.log(loginData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        `${backendUrl}/api/user/admin`,
        loginData
      );
      if (!response.data.success) {
        toast.error(response.data.message);
        return;
      }
      setToken(response.data.token);

      console.log(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3 min-w-72'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              Email Address
            </label>
            <input
              className='rounder-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='email'
              name='email'
              value={loginData.email}
              onChange={handleChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='mb-3 min-w-72'>
            <label className='text-sm font-medium text-gray-700 mb-2'>
              Password
            </label>
            <input
              className='rounder-md w-full px-3 py-2 border border-gray-300 outline-none'
              type='password'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              required
            />
          </div>
          <button
            type='submit'
            className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
