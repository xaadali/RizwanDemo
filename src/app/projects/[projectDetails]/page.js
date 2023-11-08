'use client'
import Image from 'next/image';

// ******* Local Imports *******
import MainSection from '@/app/components/common/mainSection';
import { projectCompleteDetail } from '@/utils/constants';
import { projectsSectionBg } from '@/utils/imagesUrl';
import { RatingStar } from '@/utils/svgIcons';
import Four0Page from '@/app/components/common/404';

const ProjectDetails = ({params}) => {
  const detail = projectCompleteDetail.find((item) => item?.id === params?.projectDetails)
  if (!detail) return <Four0Page />
  const {
    projectName,
    sectionTitle,
    sectionDescription,
    detail1,
    detail2,
    detail3,
    description1,
    description2,
    country,
    industry,
    timeLine,
    bgImage,
    image,
    technologies,
    activeUser,
    rating,
    userSatisfactionScore 
  } = detail
  return (
 
    <div>
      <MainSection
        sectionImg={projectsSectionBg}
        title={sectionTitle}
        description={sectionDescription}
        pageName='Projects'
      />
      <div className='container max-w-[1600px]'>
        <div className='mx-4 md:mx-10 lg:mx-[82px] mb-24 mt-[180px] md:mt-24'>
          <div className='w-full text-[24px] md:text-[32px] text-center md:text-left text-black300 font-black uppercase'>
            About <span className='text-blue600'> {projectName} </span>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-4 text-center md:text-left'>
            <div className='col-span-3 w-full pr-0 lg:pr-16 text-[16px] md:text-[20px] text-black300 leading-8 font-light pt-6 xl:w-[865px] lg:w-full md:w-[522px]'>
              <div>{description1}</div> <br/>
              <div>{description2}</div>
            </div>
            <div className='flex lg:justify-center justify-start  w-full lg:pt-6 pt-12'>
              <div className='flex flex-col gap-6 font-medium md:flex-row lg:flex-col justify-between lg:justify-start w-[475px] lg:w-full'>
                <div className='text-[16px] text-black300 '>
                  <div className='text-blue600 font-bold uppercase'> COUNTRY </div> {country}
                </div>
                <div className='text-[16px] text-black300 lg:my-8'>
                  <div className='text-blue600 font-bold uppercase'> INDUSTRY </div> {industry}
                </div>
                <div className='text-[16px] text-black300 '>
                  <div className='text-blue600 font-bold uppercase'> TIMELINE </div> {timeLine}
                </div>
              </div>
            </div>
          </div>
          <Image
            className='h-[507px] w-full object-cover lg:mt-14 mt-20'
            src={image}
            width={600}
            height={590}
            quality={100}
            alt={'detailImage'}
          />
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 font-bold md:gap-12 lg:gap-8 xl:gap-16 mt-[30px] md:mt-[70px] md:flex md:flex-col md:items-center lg:flex-none lg:flex-row'>
            <div className='w-full md:w-[380px] lg:w-full h-[193px] bg-gradient-to-r from-gradientFrom3 to-gradientTo3 rounded-xl flex justify-center items-center'>
              <div className='text-[56px] text-black300 flex flex-col items-center'>
                {activeUser}<div className='font-medium uppercase text-[14px] lg:text-[18px]'> Active Users </div>
              </div>
            </div>
            <div className='w-full md:w-[380px] lg:w-full h-[193px] bg-gradient-to-r from-gradientFrom2 to-gradientTo2 rounded-xl flex justify-center items-center'>
              <div className='text-[56px] text-black300 flex flex-col items-center'>
                <div className='flex justify-center items-center'>{RatingStar} {rating}</div><div className='font-medium uppercase text-[14px] lg:text-[18px] ml-12'> Ratings </div>
              </div>
            </div>
            <div className='w-full md:w-[380px] lg:w-full h-[193px] bg-gradient-to-r from-gradientFrom1 to-gradientTo1 rounded-xl flex justify-center items-center'>
              <div className='text-[56px] text-black300 flex flex-col items-center'>
                {userSatisfactionScore}<div className='font-medium uppercase text-[14px] lg:text-[18px] text-center'> user satisfaction score </div>
              </div>
            </div>
          </div>

          <div className='w-full text-center text-[24px] md:text-[32px] text-black300 font-black uppercase mt-20 mb-12'>
            Project <span className='text-blue600'> Details </span>
          </div>

          <div className='flex justify-center'>
            <div className='w-full md:w-10/11 lg:md:w-[768px] text-center'>
              <div className='w-full text-[16px] md:text-[20px] text-blue600 font-bold uppercase mb-8'>
                Model of Collaboration 
              </div>
              <div className='w-full text-[16px] md:text-[20px] text-black300 font-light'>
                {detail1}
              </div>
              <div className='w-full my-4 border border-gray300'/>

              <div className='w-full text-[16px] md:text-[20px] text-blue600 font-bold uppercase mb-8'>
                How Devorbis Solved The Problem?
              </div>
              <div className='w-full text-[16px] md:text-[20px] text-black300 font-light'>
                {detail2}
              </div>
              <div className='w-full my-4 border border-gray300'/>

              <div className='w-full text-[16px] md:text-[20px] text-blue600 font-bold uppercase mb-8'>
                What Devorbis Team Learned From The Project?
              </div>
              <div className='w-full text-[16px] md:text-[20px] text-black300 font-light'>
                {detail3}
              </div>
            </div>
          </div>

          <div className='flex flex-wrap justify-center mt-12 mb-16 [&>*:nth-child(2)]:mt-2 [&>*:nth-child(3)]:mt-4'>
            {
              technologies.map((image, index) => (
                <div key={index} className='p-4 md:p-[30px] last:pt-4 md:last:pt-8'>
                  <Image
                    src={image}
                    width={60}
                    height={60}
                    alt={index}
                    quality={100}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails