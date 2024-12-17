/* eslint-disable react/no-unescaped-entities */
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1='about' text2='us' />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          src={assets.about_img}
          className='w-full md:max-w-[450px]'
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <p className='text-gray-800 font-bold'>Our Mission</p>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div className=' text-xl py-4'>
        <Title text1='why' text2='choose us' />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 border divide-x'>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Quality Assurance:</p>
          <p className=' text-gray-600'>
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Convenience:</p>
          <p className=' text-gray-600'>
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Exceptional Customer Service:</p>
          <p className=' text-gray-600'>
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <NewletterBox />
    </div>
  );
};

export default About;
