import { Star } from '@/utils/svgIcons'
import Image from 'next/image'

const ClientCard = ({ clientImg, text1, text2 }) => {
  return (
    <div>
      <div className='flex'>
        {
          [1,2,3,4,5].map((_, index) => (
            <div key={index}> {Star} </div>
          ))
        }
      </div>
      <div className='w-[60] h-[60] rounded-full'>
        <Image
          className='my-4'
          src={clientImg}
          width={60}
          height={60}
          alt={'client1'}
          quality={100}
        />
      </div>
      <div className='w-[full] md:w-[400px] lg:w-[340px] xl:w-[400px]'>
          {text1}
          {text2}
      </div>
    </div>
  )
}

export default ClientCard