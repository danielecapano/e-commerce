import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <img src={assets.logo_bosso} className='mb-5 w-32' alt='' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Siamo orgogliosi di offrire un’esperienza di shopping semplice e
            gratificante, garantendo la massima attenzione ai dettagli, dalla
            scelta dei tessuti alla consegna. Che tu stia cercando capi casual
            per il quotidiano o outfit eleganti per momenti speciali, siamo qui
            per accompagnarti in ogni scelta di stile.
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>azienda</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <ul>Home</ul>
            <ul>About us</ul>
            <ul> Consegna</ul>
            <ul>Privacy policy</ul>
          </ul>
        </div>
        <div>
          <p className='text-xl font-medium mb-5 uppercase'>contatti</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <ul>+39 333.12.34.567 </ul>
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
