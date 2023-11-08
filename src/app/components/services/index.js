'use client'
import React, { useState, useEffect } from 'react'
import { servicesDataForHome } from '@/utils/constants'
import { servicesBgImg, uiUxChild, uiUxParent } from '@/utils/imagesUrl'
import Image from 'next/image'
// import { Bounce, Slide } from 'react-awesome-reveal'
import Link from 'next/link'

// ******* Local Imports *******
import MyButton from '../common/myButton'

const Services = () => {
  const [servicesDataArray, setServicesDataArray] = useState(servicesDataForHome)
  const [service, setservice] = useState({})

  const clickOnService = (obj, index) => {
    const servicesArr = servicesDataArray.map((item, ind) => {
      if (index === ind) {
        item.active = true
      } else item.active = false
      return item
    })
    setServicesDataArray(servicesArr)
    setservice(obj)
  }
  useEffect(() => {
    servicesDataArray.forEach(item => {
      if (item.active) setservice(item)
    })
  }, [])
  
  return (
    <div className='mt-[137px]'>
      <center className='mb-12 md:mb-0 mx-4 md:mx-10 lg:mx-[82px]'>
        <div className='text-black300 text-[24px] lg:text-[32px] font-black uppercase w-full md:w-[400px] leading-9'>
          {/* <Bounce triggerOnce> */}
            <>Our Services To <span className='text-blue600'>Fuel</span> Your Path.</>
          {/* </Bounce> */}
        </div>
        <div className='text-black300 text-[16px] md:text-[20px] font-normal w-full md:w-[600px] leading-6 mt-11'>
          We excel in various services, from UI/UX design that enhances user experiences to website and e-commerce
          development that establishes your online presence. Our expertise spans mobile and web applications,
          staff augmentation, and quality assurance testing, ensuring comprehensive solutions for your digital needs.
        </div>
      </center>
      {/* <Slide triggerOnce direction='right' duration={2000} > */}
        <>
          <div className='mx-0 lg:mx-[82px]'>
            <div className="w-full overflow-hidden cursor-pointer ">
              <div className="flex h-full w-full lg:grid lg:grid-cols-6  overflow-x-auto scrollbar-hide ">
                {
                  servicesDataArray?.map((item, index) => (
                    <div key={index} onClick={()=> clickOnService(item, index)} className='flex flex-col items-center pb-2 pt-4 mt-6 rounded-lg lg:w-auto hover:bg-white100'>
                      {/* <div className={`${item.active ? 'bg-blue600' : 'bg-mustered600'} rounded-lg w-[50px] h-[50px] flex justify-center items-center `}> */}
                      {/* {item.icon('#FFF')} */}
                      {item.icon(item.active ? '#0095F5' : '#FB8700')}
                      <div className={`${item.active ? 'bg-blue600' : 'bg-lineBg'} w-full h-2 my-4`}></div>
                      <div className={`${item.active ? 'text-blue600 font-black' : 'text-black300 font-normal'} text-[20px] leading-6 text-center w-[200px] lg:w-auto px-2`}>
                        {item.title}
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </>
      {/* </Slide> */}
      <div className='relative'>
        <div className='w-[250px] md:w-[370px] lg:w-[470px] xl:w-[620px] h-[450px] lg:h-[520px] xl:lg:h-[650px] absolute right-0 top-[400px] md:top-12'
          style={{
            backgroundImage: `url(${servicesBgImg})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className='grid grid-cols-1 md:grid-cols-2 my-0 md:my-8 mx-4 md:mx-10 lg:mx-[82px]'>
          <div className='mb-12 md:mb-0 content-center flex flex-col items-center md:items-start'>
            <div className='mb-4'>{service?.detail}</div>
            <Link href={service?.link || '#'}>
              <MyButton
                text='Let’s Discuss'
                style='text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white w-[187px] h-[54px]'
              />
            </Link>
          </div>
          <div className='relative'>
            <Image
              className='float-right w-[250px] h-[240px] md:w-[270px] md:h-[270px] lg:w-[350px] lg:h-[340px] xl:w-[443px] xl:h-[434px]'
              src={uiUxParent}
              width={430}
              height={350}
              alt={'uiUxParent'}
              quality={100}
            />
            <Image
              className='absolute z-50 top-[170px] right-[180px] md:top-[197px] md:right-[200px] lg:top-[237px] lg:right-[257px] xl:top-[310px] xl:right-[340px]
              w-[170px] h-[170px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[234px] xl:h-[235px]'
              src={uiUxChild}
              width={380}
              height={350}
              alt={'uiUxChild'}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services