import React from 'react'

export default function Galery() {
  return (
    <div>
        <h1 className='font-bold text-3xl text-brand mb-10 mt-52'>گالری تصاویر</h1>
        <div className='flex justify-between'>
            <img className='w-[49%] hover:scale-105 transition-all' src="/static/images/galery/Picture01.png" alt="" />
            <img className='w-[49%] hover:scale-105 transition-all' src="/static/images/galery/Picture05.png" alt="" />
        </div>
        <div className='flex justify-between mt-6'>
            <img className='w-[32%] hover:scale-105 transition-all' src="/static/images/galery/Picture04.png" alt="" />
            <img className='w-[32%] hover:scale-105 transition-all' src="/static/images/galery/Picture03.png" alt="" />
            <img className='w-[32%] hover:scale-105 transition-all' src="/static/images/galery/Picture02.png" alt="" />
        </div>
    </div>
  )
}
