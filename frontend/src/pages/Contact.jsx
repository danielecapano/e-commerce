import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1='i nostri' text2='contatti' />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img
          src={assets.contact_img}
          className='w-full md:max-w-[480px]'
          alt=''
        />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>
            Il nostro negozio
          </p>
          <p className=' text-gray-500'>
            Via Toledo, 5 <br />
            80100 - Napoli
          </p>
          <p className=' text-gray-500'>
            Tel: (+39) 081.12.34.567 <br />
            Email: info@sarabosso.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Lavora con noi</p>
          <p className=' text-gray-500 max-w-[30ch]'>
            Ti piacerebbe lavorare con noi? Verifica se ci sono posizioni aperte
            in base al tuo profilo
          </p>
          <button className='bg-black hover:bg-white text-white hover:text-black px-8 py-3 text-sm active:scale-[0.99] border border-black transition uppercase '>
            cerca offerte
          </button>
        </div>
      </div>
      <NewletterBox />
    </div>
  );
};

export default Contact;
