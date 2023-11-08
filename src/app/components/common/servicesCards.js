'use client'
import { stacksCardsInfo } from '@/utils/constants'
// import { Slide, Zoom } from 'react-awesome-reveal'

// ******* Local Imports *******
import '../../../styles/globals.css'

const ServicesCards = () => {
  return (
    <>
      <center className='pt-[72px]'>
        <div className=''>
          <div className='w-full md:w-[500px] text-[24px] md:text-[32px] text-black300 leading-10 font-black uppercase'>
            {/* <Slide triggerOnce> */}
              <> Elevate Your Business with Our <span className='text-blue600'> Software </span> Services </>
            {/* </Slide> */}
          </div>
          <div className='pt-8 w-full md:w-[600px] text-[16px] md:text-[20px] font-normal text-black300 leading-6'>
            {/* <Slide triggerOnce direction='right'> */}
              <>
                Our tailored services help you meet your goals and captivate users quickly, delivering impactful results for your business.
              </>
            {/* </Slide> */}
          </div>
        </div>
      </center>
      {/* ***** cards section start ***** */}
      <div className="w-full pt-[56px]">
        <div className='mb-14 grid  md:flex justify-start lg:justify-center h-full w-full gap-4 md:gap-10 overflow-x-auto scrollbar-hide'>
          {
            stacksCardsInfo.map((obj, index) => (
              <div key={index} className='shrink-0 lg:shrink h-[321px] w-full md:w-[398px]  border border-[#EBEBEB] p-6 pt-7 bg-white rounded-lg custom-box-shadow shadow-lg'>
                {/* <Zoom triggerOnce duration={2500}> */}
                  <>
                    <div className='bg-mustered600 rounded-lg w-[60px] h-[60px] mb-10 flex justify-center items-center'>
                      {obj.icon}
                    </div>
                    <div className='text-[24px] font-bold text-black300 mb-2'>{obj.title}</div>
                    <div className='text-[16px] font-normal text-black300 mb-8 leading-5'>{obj.text}</div>
                  </>
                {/* </Zoom> */}
              </div>
            ))
          }
        </div>
      </div>
      {/* ***** cards section end ***** */}
    </>
  )
}

export default ServicesCards