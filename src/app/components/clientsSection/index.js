import Image from 'next/image'

// ******* Local Imports *******
import { client1, client2, client3, client4, client5 } from '@/utils/imagesUrl'
import { ChevronFillLeft, ChevronFillRight } from '@/utils/svgIcons'
import ClientCard from '../clientCard'
import ClientReviews from '../clientReviews'
import MyButton from '../common/myButton'
import Link from 'next/link'

const ClientSection = ({handleClick}) => {
  return (
    <div style={{ maxWidth: '1600px'}} className="container">
      <div className='grid grid-cols-1 md:grid-cols-7 mx-2 md:mx-8 lg:mx-[32px] xl:mx-[82px] mt-16 lg:mb-[100px]'>
        <div className='col-span-3 flex md:flex-none flex-col items-center md:items-start '>
          <div className='text-black300 text-[32px] text-center md:text-start font-black uppercase w-full md:w-[400px] leading-9 pt-6'>
            Feedback from Our Valued <span className='text-blue600'>Clients</span>
          </div>

          <div className='text-black300 text-[16px] font-normal w-auto max-w-[420px] leading-5 mt-10 text-center md:text-start'>
            See firsthand experiences and honest feedback from our valued clients. Discover how our solutions have made a difference in their businesses because client satisfaction is our priority.
          </div>

          <div className='hidden lg:block'>
              <MyButton
                click={handleClick}
                text='Book A Call'
                style='text-mustered600 border-mustered600 hover:bg-mustered600 hover:border-mustered600 hover:text-white'
              />
          </div>

          <div className='hidden lg:block w-[436px] lg:w-[380px] xl:w-[436px] bg-gradient-to-r from-gradientFrom1 to-gradientTo1 pl-10 pr-4 pt-10 pb-4 mt-16 rounded-xl'>
            <ClientCard 
              clientImg={client1}
              text1={
                <div className='text-black300 text-[18px] font-normal leading-5'>
                  The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
                </div>
              }
              text2={
                <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                  <span className='font-bold'>Tihomir Sablic</span>
                  <div>Product Manager at Reservix</div>
                </div>
              }
            />
          </div>
          <div className='hidden lg:block w-[436px] lg:w-[380px] xl:w-[436px] bg-gradient-to-r from-gradientFrom2 to-gradientTo2 pl-10 pr-4 pt-10 pb-4 mt-10 rounded-xl float-right self-end'>
            <ClientCard 
              clientImg={client4}
              text1={
                <div className='text-black300 text-[18px] font-normal leading-5'>
                  The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
                </div>
              }
              text2={
                <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                  <span className='font-bold'>Tihomir Sablic</span>
                  <div>Product Manager at Reservix</div>
                </div>
              }
            />
          </div>
        </div>
        <div className='col-span-4 mt-16 md:mt-[160px] lg:mt-0'>
          <div className='float-right w-full relative'>
            <div className='float-right'>
              <div className='absolute border border-[#EBEBEB] p-4 bg-white rounded-lg shadow-lg
                w-[260px] md:w-[280px] lg:w-[260px] xl:lg:w-[310px] h-[140px] left-0 md:left-auto md:right-[260px] lg:right-[250px] xl:right-[260px] top-[18px] md:top-[50px]'
              >
                <ClientReviews
                  text1={
                    <div className='text-black300 text-[13px] font-normal leading-5 my-1'>
                      <span className='font-bold'>They produce quality code</span>
                      <div>and are effective in their use of time.</div>
                    </div>
                  }
                  text2="Sami Pippuri"
                  text3="Former CTO at XYZ."
                />
              </div>
              <div className='absolute top-[150px] md:top-[90px] right-[200px] md:right-[247px] lg:right-[237px] xl:right-[247px]'>
                {ChevronFillRight}
              </div>
              
              <Image
                className='mt-[150px] md:mt-0 w-[289px] md:w-[289px] lg:w-[289px] xl:w-[289px]'
                src={client2}
                width={290}
                height={283}
                alt={'client2'}
                quality={100}
              />
              <Image
                className='absolute top-[650px] md:top-[240px] lg:top-[215px] xl:top-[240px] right-[35%] md:right-[260px] lg:right-[247px] xl:right-[260px]'
                src={client3}
                width={201}
                height={255}
                alt={'client3'}
                quality={100}
              />
              <div className='absolute border border-[#EBEBEB] w-[260px] md:w-[310px] lg:w-[260px] xl:lg:w-[310px] h-[140px] right-0 md:right-[-18px] lg:right-[20px] xl:right-[-15px] top-[516px] md:top-[415px] lg:top-[392px] xl:top-[420px] p-4 bg-white rounded-lg shadow-lg'>
                <ClientReviews
                  text1={
                    <div className='text-black300 text-[13px] font-normal leading-5 my-1'>
                      They are the partner who will<span className='font-bold'> help </span> you
                      <div>achieve what you<span className='font-bold'> want to achieve.</span></div>
                    </div>
                  }
                  text2="Wade Warren"
                  text3="Former CTO at XYZ."
                />
              </div>
              <div className=' absolute top-[640px] md:top-[450px] lg:top-[425px] xl:top-[450px] right-[207px] md:right-[290px] lg:right-[278px] xl:right-[293px]'>
                {ChevronFillLeft}
              </div>
            </div>
          </div>

          <div className='hidden lg:block w-[436px] lg:w-[380px] xl:w-[436px] bg-gradient-to-r from-gradientFrom3 to-gradientTo3 pl-10 pr-4 pt-10 pb-4 rounded-xl mt-[625px] ml-[30px]'>
            <ClientCard 
              clientImg={client5}
              text1={
                <div className='text-black300 text-[18px] font-normal leading-5'>
                  The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
                </div>
              }
              text2={
                <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                  <span className='font-bold'>Tihomir Sablic</span>
                  <div>Product Manager at Reservix</div>
                </div>
              }
            />
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center lg:hidden w-full md:w-[436px] lg:w-[380px] xl:w-[436px] px-4 mt-[150px] md:mt-0'>
        <div className='w-full bg-gradient-to-r from-gradientFrom1 to-gradientTo1 pl-4 md:pl-10 pr-0 md:pr-4 pt-10 pb-4 rounded-xl mt-[370px] md:mt-[180px]  md:ml-[32px]'>
          <ClientCard 
            clientImg={client1}
            text1={
              <div className='text-black300 text-[18px] font-normal leading-5'>
                The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
              </div>
            }
            text2={
              <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                <span className='font-bold'>Tihomir Sablic</span>
                <div>Product Manager at Reservix</div>
              </div>
            }
          />
        </div>
        <div className='w-full lg:w-[380px] xl:w-[436px] bg-gradient-to-r from-gradientFrom2 to-gradientTo2 pl-4 md:pl-10 pr-0 md:pr-4 pt-10 pb-4 rounded-xl mt-[30px] md:mt-[50px] md:ml-[132px]'>
          <ClientCard 
            clientImg={client4}
            text1={
              <div className='text-black300 text-[18px] font-normal leading-5'>
                The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
              </div>
            }
            text2={
              <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                <span className='font-bold'>Tihomir Sablic</span>
                <div>Product Manager at Reservix</div>
              </div>
            }
          />
        </div>
        <div className='w-full lg:w-[380px] xl:w-[436px] bg-gradient-to-r from-gradientFrom3 to-gradientTo3 pl-4 md:pl-10 pr-0 md:pr-4 pt-10 pb-4 rounded-xl mt-[30px] md:mt-[50px] md:ml-[232px]'>
          <ClientCard 
            clientImg={client5}
            text1={
              <div className='text-black300 text-[18px] font-normal leading-5'>
                The Software House was <span className='font-bold'>extremely well-prepared</span> from the very beginning.
              </div>
            }
            text2={
              <div className='text-black300 text-[18px] font-normal leading-5 my-6'>
                <span className='font-bold'>Tihomir Sablic</span>
                <div>Product Manager at Reservix</div>
              </div>
            }
          />
        </div>
      </div>

      <div className='lg:hidden flex justify-center items-center my-16 pb-8'>
        <MyButton 
          click={handleClick}
          text='Book A Call'
          style='text-mustered600 hover:text-white hover:bg-mustered600 hover:border-mustered600'
        />
      </div>
    </div>
  )
}

export default ClientSection