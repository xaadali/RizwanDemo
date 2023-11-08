'use client'
import { LocationIcon } from '@/utils/svgIcons';
import React, { useState } from 'react';
import '../../../styles/accordian.css'
const paragraph = `Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed qu.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al.o enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al`;

const data = [
  {
    title: 'Pricing plans',
    paragraph
  },
  {
    title: 'How to apply',
    paragraph
  },
  {
    title: 'Purchasing process',
    paragraph
  },
  {
    title: 'Usage guides',
    paragraph
  }
];

export function Accordian () {
  return (

    <div className="wrapper">
      <ul className="accordion-list">
        {data.map((item, key) => (
          <>
            <li className="accordion-list__item" key={key}>
              <AccordionItem {...item} />
            </li>
            <div className='h-[1px] bg-[#878787] w-full'></div>
          </>
        ))}
      
      </ul>
    </div>
    
  );
};

const AccordionItem = ({ title, paragraph }) => {
  const [opened, setOpened] = useState(false);
  const applyForJob = (event) => {
    event.stopPropagation()

    const subject = 'Apply for Sr. Software Engineer (JAVA)' // You can customize the email subject
    const body = '' // You can customize the email body
    const mailtoLink = `mailto:${'info@devorbis.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  }

  return (
    <div
      className={`accordion-item ${opened ? 'accordion-item--opened' : ''}`}
      onClick={() => setOpened(!opened)}
    >
      <div className="accordion-item__line">
        <div>
          <div className='w-full text-[22px] md:text-[24px] text-blue600 leading-10 font-semibold'>
            Sr. Software Engineer (JAVA)
          </div>
          <div className='flex flex-col md:flex-row justify-between py-[12px]'>
            <div className='text-[16px] text-black700 font-normal'>
              Posted 06 days ago
            </div>
            <div className='flex text-[16px] text-black700 font-normal md:pl-[130px]'>
              <span className='mr-2'>{LocationIcon}</span> Lahore
            </div>
          </div>
        </div>
        <span className="accordion-item__icon mt-6 md:mt-0" />
      </div>
      <div className="accordion-item__inner">
        <div className="text-black700 text-[18px] font-semibold">Job Description</div>
        <div className="accordion-item__content">
          <div className='w-full lg:w-1/2 text-[16px] text-black300 font-normal'>
            {paragraph}
          </div>
          <div className='w-full text-[18px] text-black300 leading-10 font-normal mt-12'>
            Apply At &nbsp;
            <span onClick={applyForJob} className='text-blue600 font-semibold text-[20px] cursor-pointer z-10'>
              info@devorbis.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


