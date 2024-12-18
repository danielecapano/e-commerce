import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Registrati");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
    <form
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'
      onSubmit={handleSubmit}
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-bodoni-moda text-3xl'>{currentState}</p>
      </div>
      {currentState === "Registrati" && (
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800'
          placeholder='Name'
          required
        />
      )}
      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Email'
        required
      />
      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800'
        placeholder='Password'
        required
      />
      <div className='w-full flex justify-between text-sm -mt-2'>
        <p className='cursor-pointer'>Password dimenticata?</p>
        {currentState === "Registrati" ? (
          <p
            className='cursor-pointer'
            onClick={() => setCurrentState("Login")}
          >
            Hai già un account?
          </p>
        ) : (
          <p
            className='cursor-pointer'
            onClick={() => setCurrentState("Registrati")}
          >
            Crea un account
          </p>
        )}
      </div>
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>
        {currentState === "Sign Up" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
};

export default Login;
