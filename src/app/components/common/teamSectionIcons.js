'use client'
import { useMediaQuery } from 'react-responsive'

import { ChatIcon, LinkedIn } from '@/utils/svgIcons'

const TeamSectionIcons = ({email, linkedinLink}) => {

  const isMobileSmallScreen = useMediaQuery({ query: '(min-width: 425px)' })
  const clickToEmail = () => {
    const subject = '' // You can customize the email subject
    const body = '' // You can customize the email body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const clickToLinkedIn = () => {
    window.open(linkedinLink, '_blank');
  }

  return (
    <div className="flex pl-[14px] md:pl-[31px] justify-between items-center md:w-28 w-24 mb-[10px]">
      <div onClick={clickToEmail} className="cursor-pointer"><ChatIcon size={isMobileSmallScreen ? '48' : '44'}/></div>
      <div onClick={clickToLinkedIn} className="pl-2 cursor-pointer"><LinkedIn size={isMobileSmallScreen ? '38' : '38'} /></div>
    </div>
  )
}

export default TeamSectionIcons