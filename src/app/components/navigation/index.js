'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// ******* Local Imports *******
import { mainLogo } from '@/utils/imagesUrl'
import { GetInTouch } from '@/utils/svgIcons'
import { navigationTabs } from '@/utils/constants'

const Navigation = () => {
 const [isOpen, setIsOpen] = useState(false);
 const [selectedLink, setSelectedLink] = useState('')

 const pathname = usePathname()
 useEffect(() => {
   setSelectedLink(pathname)
 }, [pathname])

 return (
  <div className='absolute z-20 w-full mt-[22px]'>
    
    <nav className="flex items-center justify-between flex-wrap px-3 md:px-[50px] xl:px-[82px]">
      <Link href={'/'}>
      <div className="flex items-center justify-between flex-shrink-0 text-white mr-0 md:mr-6 ">  
        <img
          className='w-[70px] h-[70px] md:w-[106px] md:h-[106px] pt-2'
          src={mainLogo}
          width={106}
          height={106}
          alt={'logo'}
          quality={100}
          />
      </div>
      </Link>

      <div className="flex lg:hidden">
        {
          pathname !== '/contact' &&
            <Link href='/contact' >
              <button className="inline-flex items-center ml-4 md:ml-8 mr-2 md:mr-6 text-[11px] md:text-[16px] font-black text-white btn bg-mustered600 rounded-none border-mustered600 hover:bg-mustered400 hover:border-mustered400">
                {GetInTouch}
                get in touch
              </button>
            </Link>
        }

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center pl-3 pr-1 pb-1 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-[30px] w-[30px] ${isOpen ? "hidden" : "block"} text-white`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-[30px] w-[30px] ${isOpen ? "block" : "hidden"} text-white`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div className={` w-full block lg:flex lg:w-auto ${isOpen ? "animate-fade-in-down lg:animate-none block" : "hidden"}`}>
        <div className="text-2xl lg:flex justify-center items-center bg-black200 lg:bg-transparent">
          {
            navigationTabs.map((obj, ind) => (
              <div onClick={() => setIsOpen(!isOpen)} key={ind} className='block pt-[10px] lg:inline-block lg:mt-0 text-white-200 mr-[16px] xl:mr-[23px]'>
                <Link href={obj.link} className='flex flex-col items-center '>
                  <div 
                    className={`text-[18px] lg:text-[16px] xl:text-[18px] font-bold tracking-wider text-white transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150
                    ${(selectedLink === obj.link) && 'text-blue500'}`}
                  >
                    {obj.name} 
                  </div>
                  <div 
                    className={`mt-1 h-[4px] bg-mustered600 ${selectedLink !== obj.link && 'invisible'}`}
                    style={{ width: `${obj.width}` }}
                  />
                </Link>
              </div>
            ))
          }

          {
            pathname !== '/contact' 
              ?
                <Link href='/contact' >
                  <button 
                    className="hidden h-[60px] lg:inline-block items-center ml-8 text-white btn bg-mustered600 rounded-none border-mustered600 hover:bg-mustered400 hover:border-mustered400">
                    {/* transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-150 */}
                    <div className='flex justify-between items-center text-[16px] font-black'>
                      {GetInTouch}
                      <div className='ml-2'> get in touch </div>
                    </div>
                  </button>
                </Link>
              :
                <div className='mr-[217px]'></div>
          }


        </div>
      </div>
    </nav>
  </div>
 );
}
export default Navigation;
