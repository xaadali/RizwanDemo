'use client'
import Image from 'next/image'
import { Fade, Slide } from 'react-awesome-reveal'

// ******* Local Imports *******
import { ellipseInMainPointing, manPointing } from '@/utils/imagesUrl'
import MyButton from '../common/myButton'
import Link from 'next/link'

const ManPointingSection = () => {

  const MainTitle = () => (
    <div className='text-[24px] md:text-[32px] font-black leading-10 uppercase text-black300'>
      Our Journey Toward Digital
      <span className='text-blue600'> <Fade cascade damping={1e-1}>Excellence </Fade></span>
    </div>
  )
  return (
    <div className='mt-[100px] lg:mt-[140px]'>
      <div className='md:flex justify-center text-center lg:hidden mb-0 md:mb-6'>
        <div className='w-full md:w-[540px] lg:w-[550px]'><MainTitle /></div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-12 relative' >
        <div className='col-span-1 md:col-span-2'>
          <div className='w-full md:w-[550px] lg:w-[450px] xl:w-[550px]'>
            <div className='hidden lg:block pt-6'>
              <MainTitle />
            </div>
            <div className='w-full text-center md:text-start md:w-[300px] lg:w-full'>
            {/* <Slide triggerOnce> */}
              <>
                <div className='text-[16px] font-normal text-black300 mt-0 md:mt-4 leading-5'>
                  Since our inception in 2019, we've dedicated ourselves to transforming the software industry.
                  We assist businesses in prospering by providing state-of-the-art technology solutions,
                  driving growth, and ensuring success. What makes us different is our strong dedication
                  to your success. We listen, work together, and create solutions that match your goals.
                  By staying up-to-date with industry trends, we design digital experiences that meet and exceed expectations.
                </div>
                <Link href='/services'>
                  <MyButton 
                    text='Learn More'
                    style=' text-mustered600 bg-transparent rounded-none border-2 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white'
                  />
                </Link>
              </>
            {/* </Slide> */}
            </div>
          </div>
        </div>

        {/* <Slide triggerOnce direction='right' > */}
          <>
            <div className='mt-24 md:mt-0'>
              <div className='w-full rounded-xl md:w-[340px] lg:w-[400px] h-[350px] lg:h-[433px] bg-gradient-to-r from-gradientFrom3 to-gradientTo3 float-right'>
                <Image
                  className='float-right w-[190px] md:w-[130px] lg:md:w-[160px] xl:w-[210px] h-[150px] lg:h-[170px] '
                  src={ellipseInMainPointing}
                  width={267}
                  height={267}
                  alt={'ellipseInMainPointing'}
                  quality={100}
                />
                <Image
                  className='float-right absolute bottom-0 right-[-12px] md:right-[-25px] lg:right-[-30px] xl:right-[-50px] w-[300px] lg:w-[412px] h-[400px] lg:h-[522px]'
                  src={manPointing}
                  width={412}
                  height={522}
                  alt={'manPointing'}
                  quality={100}
                />
              </div>
            </div>
          </>
        {/* </Slide> */}
      </div>
    </div>
  )
}

export default ManPointingSection