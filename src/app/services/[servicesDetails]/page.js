'use client'
import Image from 'next/image';

// ******* Local Imports *******
import ServiceCard from '@/app/components/ServiceCard';
import MainSection from '@/app/components/common/mainSection';
import { serviceCompleteDetail } from '@/utils/constants';
import { ServiceInnerBg } from '@/utils/imagesUrl';
import { servicesDetail } from '@/utils/constants';

const ServicesDetails = ({params}) => {
  const detail = serviceCompleteDetail.find((item) => item?.id === params?.servicesDetails)
  return (
    <div>
      
    <div className="w-full">
        <MainSection
           sectionImg={ServiceInnerBg}
           title={`${detail.projectName}`}
          //  description={`${detail.description}`}
           pageName='Service'
         />
          {/* ***** main text Paragraph section start ***** */}
           <div className="mb-12 mx-[8px] flex justify-center text-center mt-[180px] md:mt-16">
              <div className="text-center text-[20px] text-black300 xl:w-[787px] lg:w-[640px] md:w-[405px] w-full md:font-normal">
                {detail?.mainDetail}
              </div>
            </div> 
            {/* ***** main Paragraph section end ***** */}
            {/* ***** main Services section start ***** */}
            <center className="xl:mx-0 lg:mx-[45px] md:mx-36">
                <div className='flex flex-wrap w-[300px] md:w-[465px] lg:w-[970px] xl:w-[1180px] justify-around md:justify-between my-4 '>
                  {
                    detail?.technologies.map((image, index) => (
                      <div key={index} className='p-6 last:pt-8'>
                        <img
                          src={image}
                          width={60}
                          height={60}
                          alt={index}
                          quality={100}
                          index = {index}
                        />
                      </div>
                    ))
                  }
              </div>
            </center>
            {/* ***** main Services section end ***** */}
            {/* ***** main caseStudy section start ***** */}
             <div className='mb-8'> 
            {
              detail?.serviceDetail.map(({id ,ascending, image, name, description}, index) => (
                <div key={index} className={`md:mt-0 md:mb-36 mt-0 mb-0`}>
                  <ServiceCard
                    id = {id}
                    ascending={ascending}
                    image={image}
                    name={name}
                    description={description}
                  />
                </div>
              ))
            }
            </div> 
            {/* ***** main caseStudy section end ***** */}

    </div>
    </div>
  )
}

export default ServicesDetails