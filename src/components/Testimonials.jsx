"use client";

import { FaUserCircle } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import AnimationCard from "./AnimationCard";

const Testimonials = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-12 space-y-8">

      
      <div className="text-center space-y-2">
        <h2 className="text-3xl md:text-4xl font-bold">
           Testimonials
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          What our happy users say about us
        </p>
      </div>

   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <AnimationCard delay={450}>
          <div className="p-5 rounded-xl shadow-md bg-gray-500 text-white hover:scale-[1.04] transition  mx-5 md:mx-0 ">

            <div className="flex text-yellow-300 text-lg">
              <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
            </div>

            <p className="text-sm mt-3">
              "Very healthy animals and smooth booking process. Highly recommended!"
            </p>

            <div className="flex items-center gap-2 mt-4">
              <FaUserCircle className="text-xl" />
              <div>
                <h4 className="font-bold text-sm">Rahim Uddin</h4>
                <p className="text-xs text-gray-200">Farmer</p>
              </div>
            </div>

          </div>
        </AnimationCard>
         {/* Card 2 */}
        <AnimationCard delay={450}>
          <div className="p-5 rounded-xl shadow-md bg-gray-500 text-white hover:scale-[1.04] transition  mx-5 md:mx-0 ">

            <div className="flex text-yellow-300 text-lg">
              <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
            </div>

            <p className="text-sm mt-3">
              "Best Qurbani livestock platform I have used so far all over in Bangladesh."
            </p>

            <div className="flex items-center gap-2 mt-4">
              <FaUserCircle className="text-xl" />
              <div>
                <h4 className="font-bold text-sm">Sabbir Ahmed</h4>
                <p className="text-xs text-gray-200">User</p>
              </div>
            </div>

          </div>
        </AnimationCard>

        {/* Card 3 */}
        <AnimationCard delay={450}>
          <div className="p-5 rounded-xl shadow-md bg-gray-500 text-white hover:scale-[1.04] transition  mx-5 md:mx-0 ">

            <div className="flex text-yellow-300 text-lg">
              <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
            </div>

            <p className="text-sm mt-3">
              "Great experience! Animals were exactly as described and well maintained."
            </p>

            <div className="flex items-center gap-2 mt-4">
              <FaUserCircle className="text-xl" />
              <div>
                <h4 className="font-bold text-sm">Ayesha Khan</h4>
                <p className="text-xs text-gray-200">Buyer</p>
              </div>
            </div>

          </div>
        </AnimationCard>

        
       
        {/* CRD 4 */}
        <AnimationCard delay={450}>
          <div className="p-5 rounded-xl shadow-md bg-gray-500 text-white hover:scale-[1.04] transition  mx-5 md:mx-0 ">

            <div className="flex text-yellow-300 text-lg">
              <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
            </div>

            <p className="text-sm mt-3">
              "Easy to use platform and fast response from sellers. Loved this platform!"
            </p>

            <div className="flex items-center gap-2 mt-4">
              <FaUserCircle className="text-xl" />
              <div>
                <h4 className="font-bold text-sm">Tanvir Hasan</h4>
                <p className="text-xs text-gray-200">Customer</p>
              </div>
            </div>

          </div>
        </AnimationCard>

      </div>
    </div>
  );
};

export default Testimonials;