const NewletterBox = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className='text-center'>
      <p className='text-lg sm:text-2xl font-medium text-gray-800'>
        Iscriviti adesso e ottieni il 20% di sconto*
      </p>
      <p className='text-gray-400 mt-3'>
        *offerta valida solo sul primo ordine
      </p>
      <form
        onSubmit={handleSubmit}
        className=' w-full sm:w-1/2 flex items-center mx-auto my-6  '
      >
        <input
          type='email'
          placeholder='Inserisci la tua email'
          className='w-full sm:flex-1 outline-none border border-r-0 py-3 pl-3'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4 border border-black font-medium uppercase'
        >
          iscriviti
        </button>
      </form>
    </div>
  );
};

export default NewletterBox;
