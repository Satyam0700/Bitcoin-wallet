'use client'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Chart from './components/Chart'
import Bottom from './components/Bottom'
import Filter from './components/Filter'
import { useState } from 'react'

export default function Home() {

  const [showMore, setShowMore] = useState(false)

  return (
    <main className="h-screen bg-[#e5eaf1]">
      <div className='max-w-4xl m-auto'>
        <Navbar />
        <div className='px-2'>
          <div className='bg-white mt-5 rounded-md flex flex-col px-6 py-8'>
            <div className='flex items-center justify-between'>
              <div className='flex gap-5 items-center'>
                <Image src='/Bitcoin.png' width={35} height={35} alt='Bitcoin' />
                <h2 className='font-medium text-lg'>Bitcoin</h2>
              </div>
              <div>
                <span className='text-[#aeb8c4]'>BTC</span>
              </div>
            </div>
            <h1 className='text-2xl mt-6 font-semibold'>3.529020 BTC</h1>
            <p className='flex justify-between items-center'>
              <span className='text-base text-[#aeb8c4]'>$19.153 USD</span>
              <span className='bg-[#ee225d] px-2 rounded-full text-white'>-2.32%</span>
            </p>

            <div className='mt-3 m-auto cursor-pointer' onClick={() => setShowMore((prev) => !prev)}>
              {showMore ?
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                </svg>
              }
            </div>
          </div>

          {showMore && (<Filter />)}

          <div className='bg-white mt-5 rounded-md overflow-hidden relative'>
            <div className='flex items-center justify-between mb-3 px-6 py-5'>
              <div className='flex items-center gap-4'>
                <span className='bg-red-500 rounded-full w-2 h-2' />
                <span className='text-[#aeb8c4]'>Lower: $4.895</span>
              </div>
              <div className='flex items-center gap-4'>
                <span className='bg-green-500 rounded-full w-2 h-2' />
                <span className='text-[#aeb8c4]'>Higher: $6.857</span>
              </div>
            </div>
            <Chart />
            <div className='flex items-center absolute bottom-5 left-5 gap-2'>
              <span className='bg-[#ff8f17] rounded-full w-2 h-2' />
              <span className='text-xs '>1 BTC = $5.483</span>
            </div>
          </div>

          <div className='flex mt-5 items-center gap-4 justify-around'>
            <div className='bg-white rounded-md flex flex-col w-full items-center gap-3 py-3 px-5'>
              <div className='bg-[#2376ff] flex items-center justify-center w-16 h-16 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1.5em" viewBox="0 0 320 512">
                  <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                </svg>
              </div>
              <span className='text-[#979ea6]'>Buy BTC</span>
            </div>
            <div className='bg-white rounded-md flex flex-col gap-3 w-full items-center py-3 px-5'>
              <div className='bg-[#fb23a2] flex items-center justify-center w-16 h-16 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' height="1.5em" viewBox="0 0 320 512">
                  <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
                </svg>
              </div>
              <span className='text-[#979ea6]'>Sell BTC</span>
            </div>
          </div>
        </div>
        <div className='absolute bottom-0 max-w-[896px] w-full m-auto'>
          <Bottom />
        </div>
      </div>

    </main>
  )
}
