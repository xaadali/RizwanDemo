import React from 'react'

const MyButton = ({style, text, click}) => {
  return (
    <button onClick={click}
      className={`mt-8 text-[18px] font-black p-[20px] pb-[35px] lg:text-[18px] font-blod btn bg-transparent rounded-none border-2 ${style}`}
      >
        {text}
    </button>
  )
}

export default MyButton
