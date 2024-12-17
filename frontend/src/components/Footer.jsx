/* eslint-disable react/no-unescaped-entities */
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt='' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>company</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <ul>Home</ul>
            <ul>About us</ul>
            <ul> Delivery</ul>
            <ul>Privacy policy</ul>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>get in touch</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <ul>+1-212-456-7890 </ul>
            <ul>daniele.capano@gmail.com</ul>
          </ul>
        </div>
      </div>
      <hr className='' />
      <p className='text-center text-gray-600 text-sm my-6'>
        Copyright 2024 © DanieleCapano.com - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
