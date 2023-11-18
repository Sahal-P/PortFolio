"use client";

import { FC, useState } from "react";
import Navbar from "./Navbar";
import NavDetails from "./NavDetails";


interface NavProps {}

const Nav: FC<NavProps> = ({}) => {
  const [isNavOpened, setIsOpened] = useState(false);

  return (
    <>
      <Navbar isNavOpened={isNavOpened} setIsOpened={setIsOpened} />
      <NavDetails isNavOpened={isNavOpened} setIsOpened={setIsOpened} />
    </>
  );
};
export default Nav;
