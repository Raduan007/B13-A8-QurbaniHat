import { CiTwitter } from "react-icons/ci";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import Image from "next/image";
import { FaLocationPin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-10 mt-10 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">

        {/* About Section */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/logo.png"
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover"
          />

          <h2 className="text-xl font-bold mt-2">QurbaniHat</h2>

          <p className="text-sm opacity-70 mt-2">
            This project is about Qurbani Eid (Eid al-Adha).
            It shares information, traditions, and significance of the festival.
          </p>
        </div>

        {/* Quick Links (HIDDEN on small devices) */}
        <div className="hidden md:block">
          <h2 className="font-semibold mb-2">Quick Links</h2>
          <div className="opacity-80 space-y-1">
            <p>Home</p>
            <p>All Animals</p>
            <p>My Profile</p>
            <p>Login</p>
            <p>Register</p>
          </div>
        </div>

        {/* Customer Care (HIDDEN on small devices) */}
        <div className="hidden md:block">
          <h2 className="font-semibold mb-2">Customer Care</h2>
          <div className="opacity-80 space-y-1">
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Shipping & Delivery</p>
            <p>Return Policy</p>
            <p>FAQ</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-3">Contact</h2>

          <div className="opacity-80 space-y-2 text-sm">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaLocationPin /> Sahabajpur, Kalikair, Gazipur
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaPhone /> +880 1609247375
            </p>

            <p className="flex items-center justify-center md:justify-start gap-2">
              <FaEnvelope /> raduanhossen517@gmail.com
            </p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>

          <ul className="flex gap-4 text-xl opacity-80">
            <li>
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <IoLogoInstagram />
              </a>
            </li>
            <li>
              <a href="https://x.com/">
                <CiTwitter />
              </a>
            </li>
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