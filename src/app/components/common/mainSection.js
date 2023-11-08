import Image from "next/image";

const MainSection = ({sectionImg, title, description, pageName, shade= false}) => {
  return (
    <div className="w-full relative h-[500px] md:h-[517px] bg-mustered100">
      <Image 
        className='h-[500px] md:h-[517px] w-full object-cover opacity-90'
        src={sectionImg}
        width={600}
        height={527}
        quality={100}
        alt={pageName}
      />
      {
        shade && <div style={{background: 'rgba(0, 0, 0, 0.41)'}} className='w-full h-[500px] md:h-[517px] absolute top-0' />
      }
      <div className="relative top-[-320px] md:top-[-400px] container max-w-[1600px]">
        <div className="mx-2 md:mx-[87px]">
          <div className=" mx-4 md:mx-0 flex flex-col items-center md:items-start mt-0 md:mt-[65px]">
            <div className="absolute top-[270px]">
              <div className="text-white w-fulltext-[18px] text-light flex font-normal">
                Home &nbsp; <hr className="border-t-2 my-4 w-12" />
                <div className="font-bold uppercase">&nbsp; &nbsp;{pageName}</div>
              </div>
            </div>
            <div className='text-white text-[26px] md:text-[36px] font-black text-center md:text-start w-full md:w-[550px] leading-[35px] md:leading-[50px]'>
              {title}
            </div>
            <div className='text-white text-[16px] md:text-[24px] font-normal text-center md:text-start w-full md:w-[600px] mt-4 leading-[20px] md:leading-[30px]'>
              {description}
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default MainSection;