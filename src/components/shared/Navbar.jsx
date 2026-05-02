"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700 mb-5">

      <nav className="flex justify-between items-center py-3 px-3">

        {/* LOGO + TITLE (hidden on small devices) */}
        <div className="hidden md:block gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={50}
            height={50}
          />

          <h3>
            <span className="text-2xl lg:text-4xl">
              QurbaniHat{" "}
              <span className="text-red-400">Livestock</span>
            </span>
            <br />
            Booking Platform
          </h3>
        </div>

        {/* NAV LINKS */}
        <ul className="flex items-center gap-3 md:gap-5 text-sm">

          <li>
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition duration-300 active:scale-95
              ${pathname === "/"
                ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white"
                : "text-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 hover:text-white"}`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-animals"
              className={`px-3 py-2 rounded-md transition duration-300 active:scale-95
              ${pathname === "/all-animals"
                ? "bg-gradient-to-r from-gray-900 to-gray-700 text-white"
                : "text-black hover:bg-gradient-to-r hover:from-gray-900 hover:to-gray-700 hover:text-white"}`}
            >
              All Animals
            </Link>
          </li>

        </ul>

        {/* AUTH */}
        <div className="hidden sm:block">
          <ul className="flex items-center text-sm gap-4">
            <li>
              <Link href="/signup">SignUp</Link>
            </li>
            <li>
              <Link href="/signin">SignIn</Link>
            </li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;