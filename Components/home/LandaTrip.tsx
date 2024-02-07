'use client';
import { useLang } from '@/stores/langStore';
import { resources } from '@/types/i18n';
import React from 'react'
import { Link } from 'react-scroll';

export default function LandaTrip() {
  const lang = useLang().lang;

  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN
  return (
    <section className='flex mt-36'>
        <div className='w-2/4 '>
            <div className='bg-brand w-10/12 relative h-full rounded-lg'>
                <img className=' rounded-lg absolute w-12/12 left-[-3rem] w-full object-cover top-11 h-5/6' src="/static/images/Home/Landa-trip/Landa-trip.png" alt="" />
            </div>
        </div>
        <div className='w-2/4 mt-20 h-[440px]'>
          {index1.landaTrip.map((e, index)=>(
            <div key={index}>
              <h1 className='text-brand text-4xl '>{e.title}</h1>
              <p className='text-zinc-700 my-10 leading-8 text-justify'>{e.info}</p>
              <Link className='text-brand p-2 px-4 rounded-md border-brand border-[1px] transition-all hover:bg-brand cursor-pointer hover:text-white' to=''>{e.btn}</Link>
            </div>
          ))}

        </div>
    </section>
  )
}
