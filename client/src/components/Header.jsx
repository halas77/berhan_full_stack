"use client";
import { SiWebmoney } from "react-icons/si";
import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navHandle = () => {
    setNav(!nav);
  };

  return (
    <>
      <header className="top-0 left-0 w-full fixed z-[9999] py-5 md:px-8 px-4 bg-white border-b">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="xl:pl-10">
              <a href={"/"} className="text-xl font-semibold text-slate-950">
                <SiWebmoney size={40}  className="text-indigo-700"/>
              </a>
            </div>

            {/* Navigation Menu  */}

            <div className="font-sans text-sm flex gap-2">
              <a href={"/sign-in"} className="hidden lg:flex gap-4">
                <button className=" border py-4 px-10 border-indigo-700 text-indigo-700 rounded-md font-bold text-md hover:text-indigo-500">
                  Sign in
                </button>
              </a>
              <a href={"/sign-up"} className="hidden lg:flex gap-4">
                <button className=" border py-4 px-10 bg-indigo-700 text-white rounded-md font-bold text-md hover:bg-indigo-500">
                  Sign up
                </button>
              </a>
              <button className="block lg:hidden" onClick={navHandle}>
                {!nav ? (
                  <HiBars3 size={35} className="text-black" />
                ) : (
                  <LiaTimesSolid size={35} className="text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}

      <div
        className={
          nav
            ? "z-[9999] fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-950 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-center py-3">
          <a href={"/"}>
            <img
              src={"/"}
              width={200}
              height={200}
              alt="Image"
            />
          </a>
        </div>

        <ul className="p-4">
            <li  className="p-4 border-b border-gray-900">
              <a className="uppercase text-white">
                Sign In
              </a>
            </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
