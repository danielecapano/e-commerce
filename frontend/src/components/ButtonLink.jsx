/* eslint-disable react/prop-types */
const ButtonLink = ({ children, onClick }) => {
  return (
    <div className=' w-full text-end' onClick={onClick}>
      <button className='bg-black text-white text-sm my-8 px-8 py-3 uppercase'>
        {children}
      </button>
    </div>
  );
};

export default ButtonLink;
