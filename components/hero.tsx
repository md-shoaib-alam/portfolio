import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenrateEffect";

const Hero = () => {
  return (
    <div className="pb-20 pt-44">

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className=" h-[80vh] w-[50vw] top-10 left-full "
          fill="purple"
        />
        <Spotlight className="left-70 top-28 h-[60vh] w-[50vw]"
          fill="blue" />
      </div>


      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />

      </div>
      <div className="flex justify-center items-center relative ">
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-l text-center text-blue-200 max-w-100 pr-12">
            WELCOME TO MY PORTTFOLIO
          </p>




          {/* <p className="lg:text-7xl  text-[40px] md:text-6xl  text-center font-bold mt-6">
            YOU THINK I <span className="text-purple">DESGINE</span>
          </p> */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="You think i create"
          />



          {/* <TextGenerateEffect
            className="text-center text-[30px] md:text-3xl lg:text-5xl"
            words=" Hi I&apos;m Shoaib Alam"
          /> */}
          <p className="lg:text-5xl   md:text-3xl sm:text-xl font-semibold ">
            Hi I&apos;m <span className="text-purple">Shoaib Alam</span>
          </p>
          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
              otherClasses=""
            />
          </a>


        </div>
      </div>





    </div>
  );
};

export default Hero;