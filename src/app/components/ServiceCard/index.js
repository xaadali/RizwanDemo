
import { ArrowLeft } from "@/utils/svgIcons";

const ServiceCard = ({id , ascending, image, name, description ,index}) => {
  return (
    <div className="px-0 lg:px-[40px] xl:px-[83px] lg:my-4 md:mt-20 ">
      <div className={`grid grid-cols-1  lg:grid-cols-2 gap-[56px] lg:gap-0 ${ascending ? 'relative': ''}`}>
        <div className={`${ascending ? 'order-2 lg:order-1' : 'order-2'}`}>
          <div className={`relative top-[50px] w-[150px] md:w-[300px] lg:w-[310px] h-[260px] md:h-[440px] lg:h-[453px] rounded-xl bg-white100 mb-[170px] md:mb-[170px] ${ascending ? 'float-left' : 'float-right'}`}>
            <div className={`absolute  xl:top-[40px] lg:top-[104px] md:top-[150px] top-[30px]  xl:w-[500px] lg:w-[410px] md:w-[520px] w-[280px] h-[306px] lg:h-[386px] rounded-md
             xl:mt-[57px] ${ascending ? 'ml-[35px]' : 'right-[36px] md:right-[58px] ml-[-100px] '} flex items-center justify-center`}
            >
              <img src={image}
               className={`xl:w-[480px] lg:w-[410px] md:w-[520px] w-[275px] shrink-0`}
                width={100}
                height={100}
                quality={100}
                alt={'sourcr'} />
            </div>
          </div>
        </div>
        <div className={`${ascending ? 'order-1 lg:order-2' : 'order-1'} lg:px-0 md:px-20 px-[8px]   md:mb-0 ${ascending ? 'lg:absolute left-[479px] xl:left-[600px] lg:w-[450px] xl:w-[570px]':'relative'}`}>
          <div className='text-[85px] text-gray200 font-black inline-block'>{id}</div>
          <div className='w-full  md:text-left text-[20px] md:text-[30px] text-black300 leading-10 font-black uppercase mb-4 '>
            {name}
          </div>
         {description}
        </div>
      </div>
    </div>
  )
}

export default ServiceCard