import Image from "next/image";
import Link from 'next/link';
// ******* Local Imports *******
import '../../styles/globals.css'
import { servicesBg, menSat } from "@/utils/imagesUrl";
import { rightArrow } from "@/utils/svgIcons";
import { serviceDetail } from "@/utils/constants";
import MainSection from "../components/common/mainSection";
import MyButton from "../components/common/myButton";


const Service = () => {
  return (
    <div className="w-full">
      <MainSection
        sectionImg={servicesBg}
        title='Empowering companies worldwide through digital transformation.'
        description=''
        pageName='Services'
      />
      <div className="container max-w-[1600px]">
        {/* ***** main text Paragraph section start ***** */}
        {/* <div className="xl:mx-96 my-16 md:mx-40 mx-[8px]"> */}
        <div className="xl:mx-[20rem] md:mx-28 mx-[8px] mt-[80px] md:mt-16">
          <div className="text-center text-[20px] text-black300 lg:w-[49.1875rem] md:w-[33.9375rem] w-full md:font-normal">
          We are dedicated to empowering businesses with high-performing, scalable, and secure software solutions. Our diverse range of services ensures that your transformation is about acceleration towards lasting success in the ever-evolving digital landscape. These solutions are designed for all-size companies to stand or scale up in the industry.
          </div>
        </div> 
        {/* ***** main Paragraph section end ***** */}

        {/* ***** main Services grid section start ***** */}
        <div className="my-20 md:mx-16 xl:mx-[245px] mx-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 md:gap-y-14 gap-y-12 place-items-center" >
            {serviceDetail.map(({ id, title, featureSVG, content, link }, index) => (
              // <div className={`col-span-1 last:col-span-2 last:mx-auto`}>
              <div className={`col-span-1 lg:last:col-span-2`}>
                <div className={`bg-white100 rounded-lg relative  xl:w-[460px] md:w-[435px] `}>
                  <div className="md:py-6 py-4 xl:px-6 md:px-4 px-2">
                    <div className="grid grid-cols-7 gap-12">
                      <div className="bg-blue600 rounded-lg w-[50px] h-[50px] grid place-items-center">
                        <div className="w-[30px]">
                          {featureSVG}
                        </div>
                      </div>
                      <div className="col-span-6 w-full md:w-[343px] ms-2 md:ms-0">
                        <div className="text-black300 text-[20px] text-light font-bold">
                          {title}
                        </div>
                        <div className="text-black300 text-[14px] font-light lg:font-normal">
                          {content}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div >
                    <Link href={link} target="_blank" className="arrow-icon">
                      <div className="text-blue600 cursor-pointer text-[16px] flex justify-end md:me-[40px] me-[15px]  font-medium">
                        Discover More <div className="ps-3">{rightArrow}</div>
                      </div>
                    </Link>
                  </div>
                </div>
            </div>
            ))}
          </div>
        </div> 
        {/* ***** main Services grid section end ***** */}
        {/* ***** man Set section start ***** */}

          <div className="md:mt-36 md:mb-[180px] xl:mx-20 lg:mx-8 my-36">
            <div className="text-[32px] font-black uppercase text-black300  text-center mb-6 block md:hidden">
            What Sets Us Apart?
            </div>
            <div className="grid md:grid-cols-4 grid-cols-1 bg-white100 lg:bg-white ">
              <div className="relative xl:w-[625px] lg:w-[450px] md:w-[345px] md:h-[508px] lg:h-[450px]  xl:h-[500px] lg:pt-[155px] md:pt-[140px]  md:z-10 ">
                <img
                  className="lg:w-[625px] md:w-[345px] lg:h-[400px] md:h-full w-full md:absolute lg:rounded-xl md:rounded-none md:object-cover md:object-right mb-4"
                  src={menSat}
                  width={200}
                  height={200}
                  alt={"name"}
                  quality={100}
                />
              </div>
              <div className="lg:col-span-3 bg-white100 rounded-xl md:col-span-3  md:text-left my-4">
                <div className="xl:ms-[357px] lg:ms-[260px] md:ms-[192px] md:me-2 xl:mt-[71px] xl:mb-[82px] lg:my-16 md:my-12 mx-2 md:mx-0">
                  <div className="text-[32px] font-bold uppercase text-black300 mb-6 hidden md:block">
                  What Sets Us Apart?
                  </div>
                  <div className="text-[16px] text-light text-black300 font-normal xl:h-[410px] lg:h-[480px] md:h-[565px] me-4  flex flex-col justify-between">
                    <div className="">
                    Our strong dedication to innovation, quality, and honesty is the secret weapon of Devorbis. Here is what makes us different from others:
                    </div><br className="md:hidden"/>
                    <div className="flex flex-col gap-2">
                      <div>
                        <div className="font-bold">Certified Tech Gurus:</div>
                        Our team of certified and highly tech gurus bring top-tier expertise in their domains to your projects, delivering top-notch solutions with profound tech insight.
                      </div>
                     <div>
                        <div className="font-bold">Seamless Development Processes:</div>
                        From engagement to deployment, our carefully planned development process ensures efficient and smooth project flow, giving optimal results.
                     </div>
                      <div>
                        <div className="font-bold">Diversified Industry Knowledge:</div>
                        With experience supporting multinational firms and scaling startups, we understand the unique challenges and opportunities across various sectors.
                      </div>
                      <div>
                        <div className="font-bold">Customer-Centric Approach:</div>
                        We engage in transparent communication, adapt to your requirements, and are dedicated to building long-term partnerships that drive your business forward.
                      </div>
                      
                    </div>
                  </div>
                  {/* <Link href={service?.link || '#'}> */}
                    <MyButton
                      text='Let’s Talk'
                      style='text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white px-[26px] py-[20px] h-[60px]'
                    />
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div> 
        {/* ***** man Set section end ***** */}
      </div>
  </div>
  );
};

export default Service;
