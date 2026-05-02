"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700 mb-5">
      
      <nav className="flex justify-between items-center py-2 px-4">

        {/* LEFT: LOGO + TITLE */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />

          <h3 className="text-sm md:text-base leading-tight">
            <span className="font-bold">
              QurbaniHat <span className="text-red-400">Livestock</span>
            </span>
            <br />
            <span className="text-xs md:text-sm text-gray-200">
              Booking Platform
            </span>
          </h3>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-5 text-sm">
          <li>
            <Link
              href="/"
              className={`px-3 py-2 rounded-md transition ${
                pathname === "/"
                  ? "bg-blue-700"
                  : "hover:bg-gray-800"
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/all-animals"
              className={`px-3 py-2 rounded-md transition ${
                pathname === "/all-animals"
                  ? "bg-blue-700"
                  : "hover:bg-gray-800"
              }`}
            >
              All Animals
            </Link>
          </li>
        </ul>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/signup" className="hover:text-gray-300">
            SignUp
          </Link>
          <Link href="/signin" className="hover:text-gray-300">
            SignIn
          </Link>
        </div>

        {/* HAMBURGER */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
          
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            Home
          </Link>

          <Link
            href="/all-animals"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            All Animals
          </Link>

          <hr className="border-gray-600" />

          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            SignUp
          </Link>

          <Link
            href="/signin"
            onClick={() => setOpen(false)}
            className="block py-2"
          >
            SignIn
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;