/* eslint-disable react/prop-types */
const PolicyItem = ({ icon, title, description }) => {
  return (
    <div>
      <img src={icon} className='w-12 m-auto mb-5' alt='' />
      <p className='font-semibold '>{title}</p>
      <p className='text-gray-400'>{description}</p>
    </div>
  );
};

export default PolicyItem;
