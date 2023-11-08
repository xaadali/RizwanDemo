'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
// import Jump from 'react-reveal/Jump';
import { useMediaQuery } from 'react-responsive'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// ******* Local Imports *******
import '../../../styles/home.css'

import { activePrime, barterLoot, projectsBg, spookHost, benji, evercare, voltLand } from '@/utils/imagesUrl'
import { ChevronLeft, ChevronRight, Star } from '@/utils/svgIcons';
import { projectsDetail } from '@/utils/constants';

const ProjectsSection = () => {
  
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobileScreen = useMediaQuery({ query: '(max-width: 425px)' })

  const firstDivRef = useRef(null);
  const secondDivRef = useRef(null);
  let carouselRef = useRef()

  
  useEffect(() => {
    if (firstDivRef.current && secondDivRef.current) {
      const secondDivHeight = secondDivRef.current.clientHeight;
      firstDivRef.current.style.height = `${secondDivHeight + 450}px`;
    }
  }, []);
  
  const images = [ activePrime, barterLoot, spookHost, benji, evercare, voltLand]


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 568 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 568, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  return (
    <div className='mt-[220px] md:mt-[80px] xl:mt-[290px] bg-white100 w-full'>
      <div style={{ maxWidth: '1600px'}} className="container">
        <center>
          <div className='text-black300 text-[24px] md:text-[32px] font-black uppercase w-[300px] md:w-[500px] leading-9 pt-14 pb-10'>
            <span className='text-blue600'>160 Companies</span> Thriving with Our Web Solutions.
          </div>
        </center>
        <div className='w-full relative'>
          <div  className='w-full h-[100vh]'
            ref={firstDivRef}
            style={{
              backgroundImage: `url(${projectsBg})`,
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat',
              opacity: 0.1
            }}
          />
          <div ref={secondDivRef} className='absolute z-50 top-0 left-0 w-full'>
            <div className=' mb-0 gap-4 md:gap-8 overflow-x-auto scrollbar-hide  mx-6 md:mx-12 lg:mx-[82px]'>
            {/* <Jump effect="fadeInUp"> */}
            {/* <Carousel> */}
            <Carousel
              renderDotsOutside
              ref={carouselRef}
              // ref={(el) => (carouselRef = el)}
              swipeable={false}
              draggable={false}
              showDots={true}
              arrows={false}
              // customDot={<CustomDot />}
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
                projectsDetail.map((obj, index)=> (
                  <div key={index} className='bg-transparent p-0 md:p-4'>
                    <div className=' shrink-0 lg:shrink w-[100%] bg-white radious rounded-xl'>
                      <div className={`w-full h-[260px] flex justify-center items-center`}>
                      <Image
                        className={`w-full ${index === 0 ? 'h-[61px]' : 'h-[260px]'} object-cover radious rounded-xl`}
                        src={obj.image}
                        width={300}
                        height={300}
                        alt={'name'}
                        quality={100}
                      />
                      </div>
                      <div className='px-6 pt-3 pb-4'>
                        <div className='text-black300 text-[20px] font-bold'>
                          {obj.name}
                        </div>
                        <div className='text-black300 text-[16px] font-normal'>
                          Website Development & Data Management
                        </div>
                        <div className='grid grid-cols-2 mt-2'>
                          <div>
                            <div className='flex'>
                              <div className='pt-1'> {Star} </div>
                              <div className='pl-4'>
                                <div className='text-black300 text-[24px] font-bold'>
                                  5/5
                                </div>
                                <div className='text-black200 text-[14px] font-light'>
                                  Project Rating
                                </div>
                              </div>
                              
                            </div>
                          </div>

                          <div>
                            <div className='text-black300 text-[24px] font-bold'>
                              45K
                            </div>
                            <div className='text-black200 text-[14px] font-light'>
                              End-users
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Carousel>
              {/* </Carousel> */}
            {/* </Jump> */}
            </div>

            <div className='flex justify-center items-center shrink py-12 relative'>
              <button
                className="btn mx-4 mr-[170px] md:mr-[300px]  bg-transparent rounded border border-mustered100 bg-white hover:bg-mustered600 hover:border-mustered600"
                onClick={() => {
                  const nextSlide = carouselRef.current.state.currentSlide - 1;
                   carouselRef.current.goToSlide(nextSlide)
                }}
              >
                {ChevronLeft}
              </button>
              {/* {
                images.map((_, index) => (
                  <div key={index} className='w-4 md:w-9 h-2 mx-1 cursor-pointer' />
                ))
                // images.slice((isMobileScreen ? 0 : 2), images.length).map((_, index) => (
                //   <div key={index} className='w-4 md:w-9 h-2 mx-1 cursor-pointer' style={{backgroundColor: scrollPosition === index ? '#FB8700' : '#FFF'}} />
                // ))
              } */}
              <button
                className="btn mx-4 bg-transparent rounded border border-mustered100 bg-white hover:bg-mustered600 hover:border-mustered600"
                onClick={() => {
                  const nextSlide = carouselRef.current.state.currentSlide + 1;
                   carouselRef.current.goToSlide(nextSlide)
                }}
              >
                {ChevronRight}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ProjectsSection

