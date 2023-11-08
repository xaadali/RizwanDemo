'use client'
import React from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
// import { Slide } from 'react-awesome-reveal';

// ******* Local Imports *******
import { carouselData, textArray } from '@/utils/constants'
import AnimatedText from '../animatedText'
import '../../../styles/home.css'
import MyButton from '../common/myButton';
import Link from 'next/link';

const HomeCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div className="w-full h-[550px] md:h-[798px] bg-mustered100">
      <Carousel
        arrows={false}
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={ true }
        // autoPlay={isMobileScreen ? true : false}
        // autoPlaySpeed={5000}
        keyBoardControl={true}
        // customTransition="all .5"
        // transitionDuration={5000}
        rewindWithAnimation={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        customTransition="transform 500ms linear"
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {
          carouselData.map((obj,ind) => (
            <div key={ind} id={obj.id} className="flex flex-col justify-center items-center relative carousel-item w-full">
              <div style={{ maxWidth: '1600px'}}  className='flex flex-col items-center lg:justify-start lg:items-start container w-full relative top-[120px] md:top-[230px]'>
                <div className=' flex flex-col justify-center items-center lg:justify-start lg:items-start absolute z-10 top-[25%] lg:top-[30%] lg:left-[82px] w-[310px] md:w-[450px] lg:w-[500px]'>
                  <div className='text-white animate-fade-right text-[30px] md:text-[40px] lg:text-[45px] font-black '>
                    <div className='lg:float-left'>{obj.title}</div>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:float-left'>
                      {/* <div className='contact-center'>{obj.title2}</div> */}
                      {/* <div className='text-mustered600 lg:pl-2'>
                        <AnimatedText textArray={obj.animatedTextArray} />
                      </div> */}
                    </div>
                  </div>
                  {/* <Slide triggerOnce direction='left'> */}
                    <>
                      <div className='text-center lg:text-left mt-4 text-white text-[18px] md:text-[20px] lg:text-[24px] font-normal leading-7'>{obj.text}</div>
                    </>
                  {/* </Slide> */}
                  <Link href='/contact'>
                    <MyButton 
                      text={`Let's Talk`}
                      style='text-white border-white hover:bg-mustered600 hover:border-mustered600'
                    />
                  </Link>
                </div>
              </div>
              <Image
                className='h-[550px] md:h-[798px] w-full object-cover '
                src={obj.image}
                width={0}
                height={0}
                sizes="100vw"
                quality={100}
                alt={ind}
              />
            </div> 
          ))
        }
      </Carousel>
    </div>
  )
}

export default HomeCarousel