import { Star } from '@/utils/svgIcons'

const ClientReviews = ({ text1, text2, text3 }) => {
  return (
    <div>
      <div className='flex'>
          {
          [1,2,3,4,5].map((_, index) => (
              <div key={index} className="pr-1"> {Star} </div>
          ))
          }
      </div>
      {text1}
      <div className='text-gray700 text-[12px] font-normal leading-4 my-3'>
          <span className='font-bold text-black300'>{text2}</span>
          <div>{text3}</div>
      </div>
    </div>
  )
}

export default ClientReviews