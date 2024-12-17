const NewletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <form
        onSubmit={handleSubmit}
        className=' w-full sm:w-1/2 flex items-center mx-auto my-6  '
      >
        <input
          type='email'
          placeholder='Enter your email'
          className='w-full sm:flex-1 outline-none border border-r-0 py-3 pl-3'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4 border border-black font-medium uppercase'
        >
          subscribe
        </button>
      </form>
    </div>
  );
};

export default NewletterBox;
