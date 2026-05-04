import Link from "next/link";
import React from "react";
import { FaFirefoxBrowser } from "react-icons/fa";

const Banner = () => {
  return (
   <section>
     <div className="bg-[url('/banner.jpg')] bg-cover bg-center">
      
      <div className="text-white space-y-6 md:space-y-8 py-20 md:py-18 px-4 sm:px-10 md:px-20 lg:px-40 text-center md:text-left">

      
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-gray-600">
            Welcome To Qurbani <br />
          </span>
          <span className="text-red-500">Eid Market</span>
        </h2>

        <p className="opacity-80 text-black text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Discover the traditions, meaning, and beautiful celebrations of Eid al-Adha,
          also known as Qurbani Eid, and understand its importance in Islam.
        </p>

        {/* BUTTON */}
        <Link href="/all-animals" className="flex justify-center md:justify-center">
          <button
            className="flex items-center gap-2 px-5 py-3 rounded-xl 
            transition-all duration-300 hover:scale-105 
            bg-gray-700 hover:bg-gradient-to-r from-gray-900 to-gray-700"
          >
            <FaFirefoxBrowser />
            Browse Now
          </button>
        </Link>

      </div>
    </div>



  <div className="flex items-center bg-gray-600 text-white overflow-hidden py-2">
  
  <div className="px-4 font-semibold whitespace-nowrap border-r border-white/30">
    Announcement
  </div>

  <div className="overflow-hidden w-full">
    <div className="animate-marquee-jump whitespace-nowrap pl-4 space-x-8 ">
    <span>  Eid QurBani Offer! Book now </span> <span> Fast delivery</span> <span> Best price guaranteed</span> <span> Premium breeds </span>
    </div>
  </div>

</div>
   </section>
  );
};

export default Banner;