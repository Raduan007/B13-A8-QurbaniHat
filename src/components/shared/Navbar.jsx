"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  
  const userData = authClient.useSession();
  const user = userData.data?.user
   console.log(user);

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () =>{
    await authClient.signOut();

  }

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700 relative">
      
      <nav className="flex justify-between items-center py-2 px-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />

          <h3 className="text-sm md:text-base leading-tight">
            <span className="font-bold text-2xl md:text-4xl">
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
                pathname === "/" ? "bg-blue-700" : "hover:bg-gray-800"
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

       
        <div className="hidden md:flex items-center gap-4 text-sm">
  {!user && (    <ul>
            <li>
            <Link href="/signup" className="hover:text-gray-300"> SignUp </Link>
          </li>
         <li>
           <Link href="/signin" className="hover:text-gray-300"> SignIn  </Link>
         </li>
         </ul> 
        )}
        </div>
        {user && 
          <div className="flex gap-3">
            <Avatar size="sm">
        <Avatar.Image alt="John Doe"
         src={user?.image}
         referrerPolicy="no-referrer"
          />
        <Avatar.Fallback>{user?.name.charAt(0)} </Avatar.Fallback>
      </Avatar>
      <Button onClick={handleSignOut} variant="danger" size="sm">Sign Out</Button>
          </div>
         }

        {/* Mobile profile */}
        <div className="md:hidden relative">
          <button onClick={() => setOpen(!open)}>
            <Image
              src="/logo.png"
              alt="profile"
              width={35}
              height={35}
              className="rounded-full border"
            />
          </button>

          {open && (
            <>
              {/* overlay */}
              <div
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40"
              />

              {/* dropdown */}
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg py-3 space-y-2 z-50">

                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Home
                </Link>

                <Link
                  href="/all-animals"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  All Animals
                </Link>

                <hr className="border-gray-600" />

                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  SignUp
                </Link>

                <Link
                  href="/signin"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  SignIn
                </Link>

              </div>
            </>
          )}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;