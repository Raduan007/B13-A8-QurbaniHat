import { CiTwitter } from "react-icons/ci";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white pl-15 pr-15 py-15 mt-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">

        {/* About Section */}
        <div>
             <Image
                        src={"/logo.png"}
                        alt="logo"
                        loading="eager"
                        width={50}
                        height={50}
                        className="object-cover h-auto w-auto"
                      />
          <h2 className="text-xl font-bold mb-3">QurbaniHat </h2>
          <p className="text-sm opacity-70">
            This project is about Qurbani Eid (Eid al-Adha). 
            It shares information, traditions, and significance of the festival.
          </p>
        </div>
        {/* Quick links */}
        <div>
            <h2 className="font-semibold">Quick Links</h2>
            <div className="opacity-80">
            <p>Home</p>
            <p>All Animals</p>
            <p>My Profile</p>
            <p>Login</p>
            <p>Register</p>

            </div>
        </div>


        {/* Customer care*/}
        <div className="">
             <h2 className="font-semibold">  Customer care </h2>
         <div className="opacity-80">
             <p>About Us</p>
             <p>COntact Us</p>
             <p>Shipping & Delivery</p>
             <p>Return Policy</p>
             <p>FAQ</p>
              </div>
        </div>

     
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Contact</h2>
            <div className="opacity-80">
            <p className="flex items-center gap-2 text-sm pb-2">
            <FaLocationPin /> Sahabajpur, kalikair, <br /> gazipur
            </p>
                <p className="flex items-center gap-2 text-sm">
            <FaPhone /> +880 1609247375
             </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <FaEnvelope /> raduanhossen517@gmail.com
          </p>
          </div>
        </div>

        {/* Social Links */}
           <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
         <ul className='flex gap-4 text-xl opacity-80'>
                        <li><a href="https://www.instagram.com/"><FaFacebook/></a></li>
                        <li><a href="https://www.facebook.com/"><IoLogoInstagram /></a></li>
                        <li><a href="https://x.com/"><CiTwitter/></a></li>
                    </ul>
        </div>


      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-8 border-t border-white/30 pt-4">
        © 2026 Eid al-Adha Project. All rights reserved.
      </div>
    </footer>
  );
}
 