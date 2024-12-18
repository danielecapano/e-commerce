import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>
      {/* hero Left side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 px-5 sm:py-10'>
        <div className='text-dark-gray'>
          <div className='flex items-center gap-2'>
            {/* <p className='w-8 md:w-11 h-[2px] bg-dark-gray'></p>
            <p className='font-medium text-sm md:text-base uppercase'>
              our bestsellers
            </p> */}
          </div>
          <h1 className='text-4xl sm:py-3 lg:text-5xl leading-relaxed font-bodoni-moda mb-4'>
            Trova il tuo stile
          </h1>
          <p className='max-w-[45ch] mb-8'>
            Scopri collezioni di abbigliamento che uniscono qualità e design,
            pensate per valorizzare ogni occasione. Rinnova il tuo guardaroba
            con i nostri capi esclusivi.
          </p>
          <Link
            to='/collection'
            className='bg-black hover:bg-white text-white hover:text-black px-8 py-3 text-sm active:scale-[0.99] border border-black transition uppercase '
          >
            Acquista ora
          </Link>
          <div className='flex items-center gap-2'>
            {/* <p className='font-medium text-sm md:text-base uppercase'>
              shop now
            </p>
            <p className='w-8 md:w-11 h-[2px] bg-dark-gray'></p> */}
          </div>
        </div>
      </div>
      {/* hero right side */}
      <img src={assets.hero_img} className='w-full sm:w-1/2' alt='' />
    </div>
  );
};

export default Hero;
