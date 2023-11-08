'use client'
import Image from 'next/image'
import { useRef } from 'react'
// ******* Local Imports *******
import '../styles/home.css'
import '../styles/globals.css'
import HomeCarousel from './components/homeCarousel'
import { awsImg, ellipseInMainPointing, jScriptImg, laravelImg, manPointing, nextJsImg, reactJsImg, sForceImg, tScriptImg, vueJsImg } from '@/utils/imagesUrl'
import ProjectsSection from './components/projectsSection';
import ContactForm from './components/constactForm'
import GoogleMap from './components/common/mapComp'
import Services from './components/services'
import ClientSection from './components/clientsSection'
import ManPointingSection from './components/manPointingSection'
import ServicesCards from './components/common/servicesCards'

export default function Home() {
  const ref = useRef(null);
  const projectsImages = [ reactJsImg, tScriptImg, laravelImg, jScriptImg, sForceImg, vueJsImg, nextJsImg, awsImg ]
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div>
      <HomeCarousel />
      {/* ***** section main div start ***** */}
      <div style={{ maxWidth: '1600px'}} className='container'>
        <div className='mx-4 md:mx-10 lg:mx-[82px]'>
          <ServicesCards />
          <ManPointingSection />
        </div>
          <Services />
      </div>

      <ProjectsSection />
      <ClientSection handleClick={handleClick} />

      {/* ***** technologies section start ***** */}
      <center className='mt-16 lg:mt-0'>
        <div className='text-black300 text-[24px] md:text-[32px] font-black uppercase w-[300px] md:w-[600px] leading-9'>
          Our Tech Expertise on <span className='text-blue600'>Display</span>
        </div>
        <div className='flex flex-wrap w-[300px] md:w-[600px] justify-center my-10 [&>*:nth-child(7)]:mt-1 [&>*:nth-child(8)]:mt-2'>
          {
            projectsImages.map((image, index) => (
              <div key={index} className='p-7'>
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
      </center>
      {/* ***** technologies section end ***** */}

      {/* ***** contactForm section start ***** */}
      <div ref={ref} style={{ maxWidth: '1600px'}} className='container'>
        <div className='xl:mr-[119px] lg:mr-[82px] grid grid-cols-1 lg:grid-cols-5 mb-8 md:mb-24 lg:mb-20 xl:ml-[159px] lg:ml-[105px]'>
          <div className='col-span-3 bg-blue600 pt-8 pb-20 md:pb-[160px] lg:pb-16 flex flex-col items-center lg:flex-none xl:pl-12 lg:pl-8 xl:pr-24 lg:pr-16'>
            <div className=' w-11/12 md:w-3/4 lg:w-full'>
              <div className='text-white text-[32px] font-black uppercase text-center lg:text-start'>
                Let's Connect
              </div>
              <div className='text-white text-[20px] font-normal text-center lg:text-start'>
                Connect with us today by filling out the form to discuss your project or get answers to your questions. We're here to assist you.
              </div>
              <div className='mt-6'>
                <ContactForm color='white'  />
              </div>
            </div>
          </div>

          <div className='col-span-2 w-full flex justify-center lg:items-center'>
            <div 
              className='ml-[0px] lg:ml-[-50px] w-10/11 md:w-2/3 lg:w-full h-[250px] md:h-[300px]
              lg:h-[400px] xl:h-[430px] mt-[-20px] md:mt-[-80px] lg:mt-[0px]'
            >
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
      {/* ***** contactForm section end ***** */}
      {/* ***** section main div end ***** */}
    </div>
  )
}
