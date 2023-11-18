"use client";

import { FC, useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { slideInFromLeft } from "@/utils/motion";

interface NavDetailsProps {
  isNavOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDetails: FC<NavDetailsProps> = ({ isNavOpened, setIsOpened }) => {
  const controls = useAnimation();
  useEffect(() => {
    if (isNavOpened) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isNavOpened, controls]);
  return isNavOpened ? (
    <motion.div
      initial="hidden"
      animate={controls}
      variants={slideInFromLeft(0)}
      className="w-[50vw] h-[100vh] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 hidden max-sm:block"
    >
      <div className="w-full h-full flex flex-row px-[5px] py-[17px]">
        <div
          className="h-[50px] w-[50px] items-center"
          onClick={() => setIsOpened(false)}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  ) : null;
};

export default NavDetails;
