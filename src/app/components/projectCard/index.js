import Image from 'next/image'
import Link from 'next/link';

// ******* Local Imports *******
import '../../../styles/globals.css'
import { ArrowLeft } from "@/utils/svgIcons";

const ProjectCard = ({ascending, height, image, name, title, description, link}) => {
  return (
    <div className="md:px-0 lg:px-[60px] xl:lg:px-[220px] md:my-16 lg:my-6">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={`${ascending ? 'order-1' : 'order-2'}`}>
          <div className={`relative w-[184px] lg:w-[234px] h-[259px] lg:h-[339px] rounded-md bg-white100 mb-[140px] md:mb-[170px] ${ascending ? 'float-left' : 'float-right'}`}>
            <div className={`absolute w-[235px] md:w-[293px] lg:w-[335px] h-[306px] lg:h-[386px] rounded-md bg-white border-[6px]
              border-borderLight mt-[57px] ${ascending ? 'ml-[40px] lg:ml-[81px]' : 'ml-[-100px] md:ml-[-150px] lg:ml-[-181px]'} flex items-center justify-center`}
            >
              <Image
                className={`h-[${height}] w-[310px] shrink-0`}
                src={image}
                width={100}
                height={100}
                quality={100}
                alt={'sourcr'}
              />
            </div>
          </div>
        </div>
        <div className={`px-2 md:px-10 lg:px-0 ${ascending ? 'order-1 md:order-2' : 'order-2 md:order-1'} mb-24 md:mb-0`}>
          <div className='w-full text-center md:text-left text-[24px] md:text-[32px] text-black300 leading-10 font-black uppercase mt-0 md:mt-[50px]'>
            {name}
          </div>
          <div className='w-full text-center md:text-left text-[16px] text-blue600 leading-10 font-bold my-[20px]'>
            {title}
          </div>
          <div className='text-center md:text-left text-[16px] text-black300 leading-7 font-normal my-[20px] w-full'>
            {description}
          </div>
          <div className='w-full flex justify-center md:justify-start text-[16px] text-blue600 font-medium my-[20px]'>
            <Link href={link} target="_blank" className='arrow-icon'>
              <div className="cursor-pointer flex w-full md:w-[180px] ">
                Read Case Study <span className="pl-4 mt-[2px]">{ArrowLeft}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard