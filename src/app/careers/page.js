import { careersSectionBg, frameCareer } from "@/utils/imagesUrl";
import MainSection from "../components/common/mainSection";
import { projectsDetail } from "@/utils/constants";
import { Accordian } from "../components/accordian";

const Careers = () => {
  return (
    <div>
      <MainSection
        sectionImg={careersSectionBg}
        title='Explore opportunities to thrive in your career.'
        pageName='careers'
        shade
      />
      <div className='container max-w-[1600px]'>
        <div className='lg:mx-[84px]'>
          <div className="">
            <div className="absolute left-0 top-[490px] lg:top-[400px] h-[375px] md:h-[375px] lg:h-[605px] xl:w-[1440px] lg:w-[840px] md:w-[768px] w-full"
              style={{
                backgroundImage: `url(${frameCareer})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
              }}
            ></div>
            <div className='w-full text-center text-[24px] md:text-[32px] text-black300 leading-10 font-black uppercase py-[70px]'>
              Life at <span className='text-blue600'> Devorbis </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 h-[450px] md:h-[856px] lg:h-[350px] xl:h-[456px] xl:w-[1272px] lg:w-[875px] md:w-[768px] gap-y-4 lg:gap-[28px] md:gap-[50px]">
              <div className="lg:col-span-4 col-span-6  bg-gray100">
              </div>

              <div className="lg:col-span-2 md:col-start-2 md:col-end-6 grid grid-cols-2 gap-4 md:gap-[29px] lg:gap-[28px] ">
                <div className=" bg-gray100">

                </div>
                <div className=" bg-gray100">

                </div>
                <div className=" bg-gray100">

                </div>
                <div className=" bg-gray100">

                </div>
              </div>
            </div>
          </div>

          <div> <Accordian /> </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
