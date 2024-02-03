'use client'

import { useLang } from '@/stores/langStore'
import React from 'react'
import { resources } from '@/types/i18n'
import Feature from './Feature'

type Props = {}

const FeatureContainer = (props: Props) => {

  const lang = useLang().lang
  
  const index1 = lang === "fa" ? resources.fa.mainPageFA : resources.en.mainPageEN


  return (
    <>
        {index1.features.map((
            {title, slogan, firstText, secondText, points, experienceTitle, experienceText, buttonText, modalName} 
            : {title: string, slogan: string, firstText: string, secondText: string, points: Array<any>, experienceTitle: string, experienceText: string, buttonText: string, modalName: string}, index: number) => (
                <Feature key={index} title={title} slogan={slogan} firstText={firstText} secondText={secondText} points={points} experienceTitle={experienceTitle} experienceText={experienceText} buttonText={buttonText} modalName={modalName} />
        ))}
    </>
  )
}

export default FeatureContainer