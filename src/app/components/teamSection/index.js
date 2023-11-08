import Image from "next/image";
// ******* Local Imports *******
import { ChatIcon, linkedIn } from "@/utils/svgIcons";
import { teamManager } from "@/utils/constants";
import TeamSectionIcons from "../common/teamSectionIcons";

const TeamSection = () => {

  return (
    <center className="xl:ms-[196px] xl:mx-4 md:mx-12 mx-[8px] xl:me-[171px] lg:my-20 mt-[150px] md:mt-[380px] lg:mt-[150px] md:mb-36">
      <div className="flex flex-col justify-between items-center lg:grid  lg:grid-cols-2 lg:gap-0 xl:gap-4  h-[450px] md:h-[750px] lg:h-auto">
        {teamManager.map(({title,image,jobPosition,width,height,lgwidth, top ,right, email, linkedinLink}, index) => (
          <div key={index} className=" w-[250px] md:w-[440px] lg:w-[420px] xl:w-[440px] h-[160px] md:h-[270px]  lg:h-[250px] xl:h-[299px] pt-4 md:pt-8 rounded-2xl bg-white100 flex relative mb-10 ">
            {/* padding wala  */}
            <div className="pl-0 flex flex-col justify-between">
              <div className="md:ml-[31px] w-[160px] md:w-[200px]">
                <div className="text-black300 md:text-[30px] text-[20px] font-bold">
                  {title}
                </div>
                <div className={`text-blue600 md:text-[20px] text-[13px] font-normal ${index === 0 ? '-ml-4' : ''}`}>{jobPosition}</div>
              </div>
              {/* icon  */}
              <TeamSectionIcons email={email} linkedinLink={linkedinLink} />
            </div>
            <div className="w-[150px] ">
              <Image
                src={image}
                width={250}
                height={50}
                alt="people"
                // className={`absolute xl:h-[${height}]  z-10 ${right ? 'md:-right-9 -right-12' : 'md:right-[-100px] right-[-100px]'}
                className={`absolute  z-10 
                ${index === 0 
                  ? 
                  'w-[130px] md:w-[220px] lg:w-[211px] xl:w-[245px]  lg:h-[306px] xl:h-[370px]  bottom-[0px] lg:bottom-[0px]  md:-right-9 -right-8' 
                  :
                  'w-[200px] md:w-[370px] lg:w-[348px] xl:w-[415px]  lg:h-[306px] xl:h-[380px]  bottom-[0px] lg:bottom-[0px] xl:bottom-[0px] right-[-44px] md:right-[-100px] lg:right-[-70px] xl:right-[-100px]' } `}
              />
            </div>
          </div>
        ))}
      </div>
    </center>
  );
};

export default TeamSection;
