"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    const res = await authClient.signOut();

    if (res?.error) {
      toast.error("Logout failed");
      return;
    }

    toast.success("Logged out successfully ");

    router.push("/");
    router.refresh();
    setOpen(false);
  };

  return (
  
      <div className="w-full text-white bg-gradient-to-r from-gray-900 to-gray-700">
      <nav className="flex justify-between items-center px-4 py-2">

        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={45} height={45} />
          <h3 className="font-bold text-lg">
            <span className="text-xl md:text-4xl">QurBaniHat</span>
            <span className="text-red-500 text-xl md:text-2xl"> Livestock</span>
          </h3>
        </div>

        <div className="hidden md:flex items-center justify-between w-full px-10">

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

          {!user ? (
            <div className="flex gap-3 ml-4">
              <Link
                href="/signup"
                className={`px-3 py-2 rounded transition-all duration-200 ${
                  pathname === "/signup"
                    ? "bg-blue-600 text-white"
                    : "hover:text-blue-400"
                }`}
              >
                SignUp
              </Link>
              <Link
                href="/signin"
                className={`px-3 py-2 rounded transition-all duration-200 ${
                  pathname === "/signin"
                    ? "bg-blue-600 text-white"
                    : "hover:text-blue-400"
                }`}
              >
                SignIn
              </Link>
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

        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
        >
          <FiMenu size={22} />
        </button>

      </nav>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-4 right-4 w-[30%] bg-gray-900 rounded-lg z-50 transition-all duration-300 ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >

        <div className="p-4 flex flex-col gap-3">

          <div className="flex justify-end">
            <button onClick={() => setOpen(false)}>
              <FiX size={20} />
            </button>
          </div>

          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={`px-2 py-2 rounded text-sm ${
              pathname === "/" ? "bg-blue-600 text-white" : "hover:bg-gray-800"
            }`}
          >
            Home
          </Link>

          <Link
            href="/all-animals"
            onClick={() => setOpen(false)}
            className={`px-2 py-2 rounded text-sm ${
              pathname === "/all-animals"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            All Animals
          </Link>

          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className={`px-2 py-2 rounded text-sm ${
              pathname === "/profile"
                ? "bg-blue-600 text-white"
                : "hover:bg-gray-800"
            }`}
          >
            Profile
          </Link>

          <hr className="border-gray-700" />

          {!user ? (
            <div className="flex flex-col gap-2 text-sm">
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded ${
                  pathname === "/signup"
                    ? " text-white"
                    : "hover:bg-gray-800"
                }`}
              >
                SignUp
              </Link>
              <Link
                href="/signin"
                onClick={() => setOpen(false)}
                className={`px-2 py-2 rounded ${
                  pathname === "/signin"
                    ? " text-white"
                    : "hover:bg-gray-800"
                }`}
              >
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