'use client';
import React from 'react'
import { resources } from '@/types/i18n';
import { useLang } from '@/stores/langStore';

export default function Video() {

    const lang = useLang().lang


    const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN


  return (
    <section className='bg-servicebg p-16 rounded-xl mt-60 relative'>
        <h1 className='text-brand text-4xl'>فرازمان پل ارتباطی با لاندا</h1>
        <ul className='list-disc my-10 mr-4 text-list mt-14'>
            {index1.listVideo.map((e, index)=>(
                <li key={index}>
                    {e}
                </li>
            ))}
        </ul>
        <button className='text-brand p-2 px-4 rounded-md border-brand border-[1px] transition-all hover:bg-brand hover:text-white'>رفتن به لاندا هلدینگ</button>
        <img className=' absolute z-20 top-[-8rem] left-5 ' src="/static/images/Home/Video/Video.png" alt="" />
    </section>
  )
}
