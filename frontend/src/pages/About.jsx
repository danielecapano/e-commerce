/* eslint-disable react/no-unescaped-entities */
import { assets } from "../assets/assets";
import NewletterBox from "../components/NewletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1='chi' text2='siamo' />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          src={assets.about_img}
          className='w-full md:max-w-[450px]'
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            <span className='font-semibold'>Sara Bosso Beauty and Style</span> è
            nata dalla passione per l'innovazione e dal desiderio di
            rivoluzionare il modo in cui le persone fanno acquisti online. Il
            nostro viaggio è iniziato con un'idea semplice: creare una
            piattaforma dove i clienti possano facilmente scoprire, esplorare e
            acquistare una vasta gamma di prodotti direttamente dal comfort
            delle loro case.
          </p>
          <p>
            Sin dalla nostra nascita, lavoriamo instancabilmente per selezionare
            un assortimento diversificato di prodotti di alta qualità, pensati
            per soddisfare ogni gusto e preferenza. Dalla moda e bellezza
            all'elettronica e agli articoli per la casa, offriamo un'ampia
            collezione proveniente da marchi e fornitori di fiducia.
          </p>
          <p className='text-gray-800 font-bold'>La nostra missione</p>
          <p>
            La missione di{" "}
            <span className='font-semibold'>Sara Bosso Beauty and Style</span> è
            offrire ai clienti scelta, praticità e fiducia. Siamo impegnati a
            garantire un'esperienza di shopping senza intoppi, che superi le
            aspettative in ogni fase: dalla navigazione e ordinazione alla
            consegna e oltre.
          </p>
        </div>
      </div>
      <div className=' text-xl py-4'>
        <Title text1='why' text2='choose us' />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20 border divide-y md:divide-x md:divide-y-0'>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Garanzia di qualità:</p>
          <p className=' text-gray-600'>
            Selezioniamo e verifichiamo meticolosamente ogni prodotto per
            garantire che soddisfi i nostri rigorosi standard qualitativi.
          </p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Convenienza:</p>
          <p className=' text-gray-600'>
            Grazie alla nostra interfaccia intuitiva e al processo di
            ordinazione senza problemi, fare acquisti non è mai stato così
            facile.
          </p>
        </div>
        <div className='px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='font-bold'>Servizio clienti eccezionale:</p>
          <p className=' text-gray-600'>
            Il nostro team di professionisti dedicati è pronto ad assisterti
            lungo il percorso, assicurando che la tua soddisfazione sia la
            nostra massima priorità.
          </p>
        </div>
      </div>
      <NewletterBox />
    </div>
  );
};

export default About;
