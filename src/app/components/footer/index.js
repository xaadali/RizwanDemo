'use client'
import Image from 'next/image'
import Link from 'next/link'
// ******* Local Imports *******
import { footerBg, mainLogoBlack } from '@/utils/imagesUrl'
import { EmailIcon, LinkedInIcon } from '@/utils/svgIcons'

import { ScrollTop } from '../common/scrollTop'

const Footer = () => {
  const clickToEmail = () => {
    const subject = '' // You can customize the email subject
    const body = '' // You can customize the email body
    const mailtoLink = `mailto:${'info@devorbis.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const clickToLinkedIn = () => {
    window.open('https://www.linkedin.com/company/devorbis/', '_blank');
  }

  const clickToAddress = () => {
    window.open('https://maps.app.goo.gl/er3HE1cUs3hovj1UA');
  };

  return (
    <div className='w-full relative'>
      <ScrollTop />

      <div className=" h-[790px] md:h-[600px] lg:h-[400px]"
        style={{
          backgroundImage: `url(${footerBg})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundColor: `#AECEE7`,
          opacity: 0.2
        }}
      />
      <div style={{transform: 'translate( -50%)', maxWidth: '1600px'}} className='container absolute z-50 top-0 left-[50%] content-center self-center w-full' >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-[30px] mx-2 md:mx-20'>

          <div className='col-span-1 md:col-span-2 flex flex-col items-center lg:flex-none lg:items-start'>
       

            <div className='w-[300px] md:w-[450px] flex flex-col items-center lg:flex-none lg:items-start'>
              <Link href={'/'}>
                <img 
                  className='ml-4'
                  src={mainLogoBlack}
                  width={106}
                  height={106}
                  alt={'name'}
                  quality={100}
                />
              </Link>
              <div className='text-black300 text[18px] text-center lg:text-start font-normal'>
                With our technology solutions, we help clients to make better choices, and help our partners understand their customers to increase conversion and satisfaction.
              </div>
              <div className='flex my-10'>
                <div onClick={clickToEmail} className='bg-mustered600 rounded-lg p-2 w-fit mr-2 cursor-pointer'>
                  {EmailIcon}
                </div>
                <div onClick={clickToLinkedIn} className='bg-mustered600 rounded-lg p-2 w-fit cursor-pointer'>
                  {LinkedInIcon}
                </div>

              </div>
              
            </div>
          </div>
          <div className='mt-0 lg:mt-14 '>
            <div className='text-black300 text-[22px] font-bold'>Quick Links</div>
            <div className='grid grid-cols-2 mt-2'>
              <div className=''>
                <Link href={'/services'}><div className='text-black300 text-[18px] font-normal cursor-pointer'>Services</div></Link>
                <Link href={'/projects'}><div className='text-black300 text-[18px] font-normal mt-2 cursor-pointer'>Projects</div></Link>
              </div>
              <div className=''>
              <Link href={'/about'}><div className='text-black300 text-[18px] font-normal cursor-pointer'>About Us</div></Link>
              <Link href={'/contact'}><div className='text-black300 text-[18px] font-normal mt-2 cursor-pointer'>Contact</div></Link>
              </div>
            </div>
          </div>
          <div className='mt-6 md:mt-0 lg:mt-14 '>
            <div className='text-black300 text-[22px] font-bold'>Get In Touch</div>
              <div className=''>
                <Link href={"tel:+923301856869"}> <div className='text-black300 text-[18px] font-normal mt-2 '>+92 330 185 6869</div> </Link>
                <div onClick={clickToEmail} className='text-black300 text-[18px] font-normal mt-2 cursor-pointer'>info@devorbis.com</div>
                <div onClick={clickToAddress} className='text-black300 text-[18px] font-normal mt-2 cursor-pointer'>8502 Preston Rd. Inglewood, Maine 98380</div>
              </div>
          </div>
        </div>

        <div className='mx-2 md:mx-20 mt-8 lg:mt-0'>
          <div className='flex justify-center'>
            <div className='w-full border border-borderGray' />
          </div>

          <div className='grid grid-cols-2 my-5'>
            <div className='text-black300 text-[16px] font-normal' >
              Devorbis © 2023
            </div>

            <div className='flex justify-end' >
              <div className='text-black300 text-[16px] font-normal cursor-pointer'>
                Cookies Policy     
              </div>
              <div className='text-black300 text-[16px] font-normal cursor-pointer ml-8'>
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer