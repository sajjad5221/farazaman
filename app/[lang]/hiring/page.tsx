import React from 'react'
import HiringForm from '@/Components/hiring/HiringForm'

export default function page({
  params: { lang }
}: {
  params: { lang: string };
}) {
  return (
    <div className=''>
      <HiringForm lang={lang} />
    </div>
  )
}
