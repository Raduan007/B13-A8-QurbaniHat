"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700">

      <nav className="flex justify-between items-center px-4 py-2">

        {/* logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />
          <h3 className="font-bold text-lg">
            <span className="text-xl md:text-4xl">QurBaniHat</span>
            <span className="text-red-500 text-xl md:text-4xl">Livestock</span>
           
          </h3>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between w-full px-10">

          {/* CENTER NAV */}
          <div className="flex items-center gap-5 mx-auto">

            <Link
              href="/"
              className={`px-3 py-2 rounded transition-all duration-200 ${
                pathname === "/" ? "text-blue-700" : "hover:text-blue-400"
              }`}
            >
              Home
            </Link>

            <Link
              href="/all-animals"
              className={`px-3 py-2 rounded transition-all duration-200 ${
                pathname === "/all-animals"
                  ? "text-blue-700"
                  : "hover:text-blue-400"
              }`}
            >
              All Animals
            </Link>

            <Link
              href="/profile"
              className={`px-3 py-2 rounded transition-all duration-200 ${
                pathname === "/profile"
                  ? "text-blue-700"
                  : "hover:text-blue-400"
              }`}
            >
              Profile
            </Link>

          </div>

          {/* AUTH DESKTOP */}
          {!user ? (
            <div className="flex gap-3 ml-4">
              <Link href="/signup">SignUp</Link>
              <Link href="/signin">SignIn</Link>
            </div>
          ) : (
            <div className="flex items-center gap-3 ml-4">
              <Link href="/profile">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
              </Link>

              <Button size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </div>
          )}

        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={22} />
        </button>

      </nav>

      {/* BACKDROP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-4 right-4 w-[30%] bg-gray-900 rounded-lg z-50 transition-all duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >

        <div className="p-4 flex flex-col gap-3">

          {/* CLOSE */}
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* NAV */}
          <Link href="/" onClick={() => setOpen(false)} className="px-2 py-2 hover:bg-gray-800 rounded text-sm">
            Home
          </Link>

          <Link href="/all-animals" onClick={() => setOpen(false)} className="px-2 py-2 hover:bg-gray-800 rounded text-sm">
            All Animals
          </Link>

          <Link href="/profile" onClick={() => setOpen(false)} className="px-2 py-2 hover:bg-gray-800 rounded text-sm">
            Profile
          </Link>

          <hr className="border-gray-700" />

          {/* AUTH MOBILE */}
          {!user ? (
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/signup" onClick={() => setOpen(false)}>
                SignUp
              </Link>
              <Link href="/signin" onClick={() => setOpen(false)}>
                SignIn
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">

              <Link
                href="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
                <span className="text-sm">{user?.name}</span>
              </Link>

              <Button size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>

            </div>
          )}

        </div>
      </div>

    </div>
  );
};

export default Navbar;