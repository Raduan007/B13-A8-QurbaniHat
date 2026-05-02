"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  // ✅ SINGLE SOURCE OF TRUTH
  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/all-animals" },
  ];

  const NavLinks = ({ onClick }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={`px-3 py-2 rounded-md transition ${
            pathname === item.href
              ? "bg-blue-700"
              : "hover:bg-gray-800"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  const AuthSection = () => {
    if (!user) {
      return (
        <>
          <Link href="/signup" onClick={() => setOpen(false)}>
            SignUp
          </Link>
          <Link href="/signin" onClick={() => setOpen(false)}>
            SignIn
          </Link>
        </>
      );
    }

    return (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Avatar size="sm">
            <Avatar.Image src={user?.image} />
            <Avatar.Fallback>
              {user?.name?.charAt(0)}
            </Avatar.Fallback>
          </Avatar>
          <span>{user?.name}</span>
        </div>

        <Button onClick={handleSignOut} size="sm">
          Sign Out
        </Button>
      </div>
    );
  };

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
      <nav className="flex justify-between items-center px-4 py-2">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />
          <h3 className="font-bold text-xl">
            QurbaniHat <span className="text-red-400">Livestock</span>
          </h3>
        </div>

        {/* DESKTOP (same logic) */}
        <div className="hidden md:flex items-center gap-5">
          <NavLinks />
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-4">
          <AuthSection />
        </div>

        {/* MOBILE HAMBURGER */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

     
      {open && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-3">

       
          <div className="flex flex-col gap-2">
            <NavLinks onClick={() => setOpen(false)} />
          </div>

          <hr className="border-gray-600" />

    
          <AuthSection />
        </div>
      )}
    </div>
  );
};

export default Navbar;