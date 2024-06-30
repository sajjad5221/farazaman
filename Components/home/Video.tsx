'use client';
import React from 'react'
import { resources } from '@/types/i18n';
import { useLang } from '@/stores/langStore';
import Link from 'next/link';

export default function Video() {

    const lang = useLang().lang


    const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN


  return (
    <section className='bg-servicebg p-6 rounded-xl mt-24 md:mt-40 flex flex-col-reverse lg:flex-row'>
        <div className=' pt-5 lg:pt-0 w-full lg:w-[40%]'>
            <h1 className='text-brand text-2xl xl:text-4xl'>فرازمان پل ارتباطی با لاندا</h1>
            <ul className='list-disc my-10 mr-4 text-list mt-6 xl:mt-14'>
                {index1.listVideo.map((e, index)=>(
                    <li className='text-[14px] xl:text-base' key={index}>
                        {e}
                    </li>
                ))}
            </ul>
            <Link href='https://landaholding.com' className='text-[14px] xl:text-base text-brand p-2 px-4 rounded-md border-brand border-[1px] transition-all hover:bg-brand hover:text-white'>رفتن به لاندا هلدینگ</Link>
        </div>
        <div className=' mt-[-4rem] w-full lg:w-[60%]'>
            <img className='w-full' src="/static/images/Home/Video/Video.png" alt="" />
        </div>
    </section>
  )
}
