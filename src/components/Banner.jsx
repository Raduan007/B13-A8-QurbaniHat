import Link from "next/link";
import React from "react";
import { FaFirefoxBrowser } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-[url('/banner.png')] bg-cover bg-center">
      
      <div className="text-white space-y-6 md:space-y-8 py-20 md:py-30 px-4 sm:px-10 md:px-20 lg:px-40 text-center md:text-left">

      
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          <span className="text-blue-400">
            Welcome To Qurbani <br />
          </span>
          Eid Market
        </h2>

        <p className="opacity-80 text-blue-200 text-sm sm:text-base md:text-lg max-w-2xl mx-auto md:mx-0">
          Discover the traditions, meaning, and beautiful celebrations of Eid al-Adha,
          also known as Qurbani Eid, and understand its importance in Islam.
        </p>

        {/* BUTTON */}
        <Link href="/all-animals" className="flex justify-center md:justify-start">
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
    </section>
  );
};

export default Banner;