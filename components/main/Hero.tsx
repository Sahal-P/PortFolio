import { FC } from "react";
import HeroContent from "../sub/HeroContent";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video autoPlay muted loop className="rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover">
        <source src="https://utfs.io/f/fb967538-4383-4bfb-b997-78ca4b53dbe9-m1knjz.webm" type="video/webm" />
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;
