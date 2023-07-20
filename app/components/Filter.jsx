import React from 'react'

const Filter = () => {
  return (
    <div className='flex items-center justify-between mt-4 w-full max-w-4xl'>
        <div className='cursor-pointer'>
            <span className='text-[#aeb8c4]'>Day</span>
        </div>
        <div className='cursor-pointer'>
            <span className='bg-gray-500 rounded-xl text-white px-5 py-1'>Week</span>
        </div>
        <div className='cursor-pointer'>
            <span className='text-[#aeb8c4]'>Month</span>
        </div>
        <div className='cursor-pointer'>
            <span className='text-[#aeb8c4]'>Year</span>
        </div>
    </div>
  )
}

export default Filter