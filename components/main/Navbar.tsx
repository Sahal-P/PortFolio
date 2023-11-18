"use client"

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Socials } from "../constants";
import Link from "next/link";

interface NavbarProps {
  isNavOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: FC<NavbarProps> = ({setIsOpened, isNavOpened}) => {
  useEffect(() => {

  },[isNavOpened])
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 ">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="h-auto w-auto flex flex-row items-center hidden max-sm:block " onClick={() => setIsOpened(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#ffffff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </div>
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/profile.jfif"
            className="rounded-full cursor-pointer hover:animate-slowspin max-sm:w-[35px] max-sm:h-[35px]"
            alt="logo"
            width={50}
            height={50}
          />
          <span className="ml-[10px] hidden md:block text-gray-300 max-sm:hidden">
            Sahal P
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20 max-sm:hidden">
          <div className="flex items-center justify-between border w-full h-auto border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me{" "}
            </a>
            <a href="#skills" className="cursor-pointer">
              {" "}
              Skills{" "}
            </a>
            <a href="#projects" className="cursor-pointer">
              {" "}
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 max-sm:hidden">
          {Socials.map((social) => (
            <Link href={social.link} key={social.name}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
