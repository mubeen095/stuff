import React from "react";
import Link from "next/link";
import LogoSkillGarage from "../../../public/assets/logo.svg";
import Facebook from "../../../public/assets/Icon/facebook.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 p-5 sm:pb-20 md:pb-5 lg:pb-5 xl:pb-5 pb-14">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-1 sm:grid-rows-1 xs:grid-rows-1 grid-flow-row sm:grid-flow-col  grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col items-start ">
          <LogoSkillGarage className="h-24 w-auto mb-6" />

          <p className="mb-4">
            <strong className="font-medium">Skill Garage</strong> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Skill Garage
          </p>
        </div>
        <div className=" row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Useful Links</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
              <Link href="/" >
              <a>Home</a>
              </Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/staffing" >
              <a>Services</a>
              </Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/our-courses" >
              <a>Programs</a>
              </Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/" >
              <a>Tutors</a>
              </Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/" >
              <a>Testimonals</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="row-span-1 md:col-span-4 sm:col-span-12 col-start-1 col-end-12 sm:col-start-1 sm:col-end-12 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Quick Links</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/" >
              <a>Sign In</a>
              </Link>
            </li>
            <li className="my-2 hover:text-purple-600 cursor-pointer transition-all">
            <Link href="/" >
              <a>Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
