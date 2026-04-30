"use client";
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  return (
    <div className="  mx-auto w-full  text-white bg-gradient-to-r from-gray-900 to-gray-700">
      <nav className=" flex justify-between items-center  py-3 px-3 ">
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={50}
            height={50}
            className="object-cover h-auto w-auto"
          />
          <h3 className="">
           <span className="text-4xl"> QurbaniHat <span className="text-red-400">Livestock</span> </span><br /> Booking Platform
            </h3>
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/all-animals"}>All  Animals</Link>
          </li>
        </ul>

        <div className="flex ">
          <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}>SignUp</Link>
            </li>
            <li>
              <Link href={"/signin"}>SignIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;