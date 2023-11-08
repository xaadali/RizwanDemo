import { contactCardInfo } from '@/utils/constants'
import { contactSectionBg } from '@/utils/imagesUrl'
import React from 'react'

// ******* Local Imports *******
import MainSection from '../components/common/mainSection'
import GoogleMap from '../components/common/mapComp'
import ContactForm from '../components/constactForm'

const Contact = () => {
  return (
    <div>
      <MainSection
        sectionImg={contactSectionBg}
        title={`Need assistance? Tell us how we can help.`}
        pageName='contact'
        shade
      />
      <div className='container max-w-[1600px]'>
        <div className='mx-4 md:mx-10 lg:mx-[82px]'>
          <div className='w-full lg:w-3/4 xl:w-1/2 text-[24px] md:text-[32px] text-black300 leading-10 font-black uppercase pt-[50px]'>
          Start a conversation by filling out our form. <span className='text-blue600'>Our experts will get in touch with you soon.</span>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5'>
            <div className='pb-[81px] pt-12 md:col-span-2 xl:w-[678px]'>
              <ContactForm color='black' page='contact' />
            </div>
            <div className='flex flex-col gap-10 md:gap-0 items-center lg:items-end pl-0 md:pl-8 lg:pl-0 text-[#333]'>
              <div className='w-full lg:w-full h-[212px] rounded-2xl bg-white100 p-2 md:p-6 [&>*:nth-child(2)]:ps-1'>
                {
                  contactCardInfo.map((item, index) => (
                    <div key={index} className='flex py-2'>
                      <div>{item.icon}</div>
                      <div className={`text-[22px] font-normal pl-4 leading-6 ${index === 0 ? 'pl-3' : 'pl-4'}`}>{item.text}</div>
                    </div>
                  )) 
                }
              </div>
              <div className='w-full md:w-[450px] lg:w-full h-[220px] mt-8 mb-20'>
                <GoogleMap rounded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact