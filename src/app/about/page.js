
import Image from "next/image";
// ******* Local Imports *******
import { aboutBg, aboutSectionBg, meetingPic,frameAbout } from "@/utils/imagesUrl";
import { vectorImage } from "@/utils/svgIcons";
import TeamSection from "../components/teamSection";
import { teamCard } from "@/utils/constants";
import MainSection from "../components/common/mainSection";


const About = () => {
  return (
    <div className="w-full">
      <MainSection
        sectionImg={aboutSectionBg}
        title={`Leading the Way in Digital Excellence`}
        pageName='about us'
      />

      {/* ***** main Meeting section start ***** */}
 
      <div className="container max-w-[1600px] pt-[20px] lg:pt-[105px] ">
        <div className=" mt-16 mb-24 lg:mb-56">
          <div className="grid xl:gap-16 lg:gap-8 relative lg:grid-cols-2 md:grid-cols-1">
            <div className="xl:ml-[82px] lg:ml-10 ">
              <div className="absolute h-[770px] md:h-[580px] lg:h-[500px] xl:w-[660px] lg:w-[470px] hidden lg:block"
                style={{
                  backgroundImage: `url(${frameAbout})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                }}
              />
              <div className=" top-0 lg:text-left text-center font-normal w-full lg:mx-0 md:px-16 lg:px-0">
                <div className="text-[32px] font-black uppercase text-black300 mb-6 ">
                  Who We Are
                </div>
                <div className="text-[18px] pr-2 xl:text-[20px] text-black300 md:h-[285px] xl:h-[350px] lg:h-[400px] h-[435px] flex flex-col justify-between">
                  <div>
                  We are a vibrant group of tech enthusiasts committed to redefining the horizons of digital innovation.
                  </div>
                  <div>
                  Our journey began in 2019 with a vision to reshape the software industry landscape, and since then, we have helped 100+ companies around the globe with our technology services. Fuelled by a passion for tackling challenges, we shine in the art of problem-solving, forging growth and prosperity for businesses across diverse sectors.
                  </div>
                  <div>
                  We focus on dedication, innovation, and a relentless search for excellence, striving to create more success stories in the ever-evolving digital world.
                  </div>
              </div>
            </div>

            </div>
            <div className="mx-0 md:mx-0 xl:mx-24 lg:mx-10 md:py-2 py-20">
              <div className="relative md:left-[10px] lg:-top-24 md:top-20 top-8 lg:w-[189px] md:w-[250px] w-[150px] md:h-[433px] h-[250px] bg-white100 lg:rounded-lg rounded-tl-lg rounded-r-none float-right">
                <div className="absolute right-[0px] -top-[217px] h-[500px] w-[500px] md:w-[780px] pe-[100px] lg:hidden"
                  style={{
                    backgroundImage: `url(${frameAbout})`,
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
                <div className="z-10 absolute right-[60px]  md:right-[70px] lg:right-[30px]  md:top-[56px] lg:top-[96px] top-[50px] md:w-[500px] w-[250px] lg:pt-2">
                  <Image
                    className="w-[300px] md:w-[575px] lg:w-[500px] xl:h-[445px] lg:h-[425px] md:h-[575px]"
                    src={meetingPic}
                    width={550}
                    height={445}
                    alt={"name"}
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* ***** main Meeting section end ***** */}
        {/* ***** main Team section start ***** */}
        <TeamSection />
    
        <center className="md:mx-12 lg:mx-20 xl:ml-[258px] xl:mr-[268px] lg:my-24 md:mb-20 mx-12 my-20">
          <div className="grid grid-cols-1 md:grid-cols-3  lg:gap-12 md:gap-4 gap-36  md:justify-around  content-around ">
            {teamCard.map((person, index) => (
              <div key={index} className="">
                <div className="bg-white100 relative  rounded-tl-xl xl:w-[262px] lg:w-[258px] xl:h-[178px] lg:h-[176px] md:h-[145px] md:w-[190px] h-[125px] w-[200px]">
                  <Image
                    src={person.image}
                    width={180}
                    height={180}
                    alt="people"
                    className="w-56 mx-auto lg:w-56 lg:h-56 absolute bottom-0 right-0"
                  />
                </div>
                <div className="text-black300 text-center mt-2 w-[width: 253px] h-[51px]">
                  <div className="text-black300  text-[20px] font-bold text-xl">
                    {person.title}
                  </div>
                  <div className="text-blue600  xl:text-[15px] text-[12px] text-lg font-normal">
                    {person.jobPosition}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </center>
      </div>

      {/* ***** main Team section end ***** */}
    </div>
  );
};

export default About;
