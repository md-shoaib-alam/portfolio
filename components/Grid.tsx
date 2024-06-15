import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { griditem } from '@/data/GridItem'
const Grid = () => {
  return (
   <section>
    <BentoGrid className='max-md:flex max-md:justify-center max-md:items-center max-md:flex-col  lg:ml-[17vw]   md:ml-auto ' >
    
    {/* for smalll deivece resonsive it if needed */}
      {griditem.map
      (({id,
        title,
        description,
        className,
        imgClassName,
        titleClassName,
        img,
        spareImg}) =>( 
      <BentoGridItem  
      id={id}   
      key={id}
      title={title}
      description={description}
      className={className}
      img={img}
      imgClassName={imgClassName}
      titleClassName={titleClassName}
      spareImg={spareImg}
      />

    ))}
    </BentoGrid>
    </section>
  )
}

export default Grid