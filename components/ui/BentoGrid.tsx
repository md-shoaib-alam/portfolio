import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./BackgroundGd";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 lg:grid-cols-10 lg:grid-rows-4 md:grid-rows-4 md:grid-cols-7  gap-9 max-w-8xl mx-auto  justify-center    ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  imgClassName?: string;
  titleClassName?: string;
  img?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between  flex flex-col space-y-4 border-red-700  max-md:items-center max-md:justify-center max-md:ml-3 max-md:mr-3 ",
        className
      )}

      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* created by me  */}


      <div className={`${id === 6}` && 'flex justify-center h-full'}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-fill object-center')}
            /> 
          )}
        </div>

        <div className={`absolute right-0 bottom-5 ${id === 5 && "w-full opacity-80"} `}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-fill object-center'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className=' absolute z-50 flex justify-center items-center' />
          </BackgroundGradientAnimation>

        )}

        <div className={cn(titleClassName, 'group-hover/Bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col  ')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">{description}</div>
          <div className="font-sans font-bold text-lg lg:text-3xl dark:text-neutral-200  z-10 max-w-96 ml-7 mr-2"> {title}</div>
        </div>

      </div>















      <div className="group-hover/bento:translate-x-2 transition duration-200">

        {/* <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div> */}
        {/* <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div> */}

        {id===3 &&(
          <div></div>
        )}
      </div>
    </div>
  );
};
