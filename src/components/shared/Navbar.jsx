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

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Animals", href: "/all-animals" },
  ];

  return (
    <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700 relative">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-4 py-2">

        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />
          <h3 className="font-bold text-xl">
            QurbaniHat <span className="text-red-400">Livestock</span>
          </h3>
        </div>

        <button className="md:hidden" onClick={() => setOpen(true)}>
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

      {/* COMPACT DRAWER (30% WIDTH ONLY, AUTO HEIGHT) */}
      <div
        className={`fixed top-4 right-4 w-[30%] bg-gray-900 rounded-lg shadow-2xl z-50 transform transition-all duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >

        <div className="p-4 flex flex-col gap-3">

          {/* CLOSE BUTTON */}
          <div className="flex justify-end">
            <button onClick={() => setOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          {/* NAV */}
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded text-sm ${
                  pathname === item.href
                    ? "bg-blue-700"
                    : "hover:bg-gray-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <hr className="border-gray-700" />

          {/* AUTH */}
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

              <div className="flex items-center gap-2">
                <Avatar size="sm">
                  <Avatar.Image src={user?.image} />
                  <Avatar.Fallback>
                    {user?.name?.charAt(0)}
                  </Avatar.Fallback>
                </Avatar>
                <span className="text-sm">{user?.name}</span>
              </div>

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