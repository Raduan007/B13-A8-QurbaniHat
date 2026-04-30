import Link from 'next/link';
import React from 'react';
import { FaFirefoxBrowser } from 'react-icons/fa';

const Banner = () => {
    return (
      <section className="bg-[url('/banner.png')] bg-cover bg-center">
            <div className="text-white   space-y-8  py-30 px-40">
              <h2 className='text-6xl font-bold'> 
                  <span className='text-blue-400'>Welcome To Qurbani <br /> </span> Eid Market
                  </h2>
              <p className='opacity-70 text-blue-300'>Discover the traditions, meaning, and beautiful celebrations of Eid al-Adha, also known as Qurbani Eid, and understand its importance in Islam.</p>
              <Link 
               href={"/all-animals"}
               className='flex justify-center'>
                <button className='flex items-center gap-2 px-4 py-2 rounded-xl 
                transition-all duration-300 hover:scale-105 bg-gray-700 hover:bg-gradient-to-r from-gray-900 to-gray-700 '>
                   <FaFirefoxBrowser /> 
                  Browse Now
                   </button>
              </Link>
         </div>
        </section>
    );
};

export default Banner;