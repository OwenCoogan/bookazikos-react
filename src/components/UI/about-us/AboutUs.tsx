import React from 'react'
import { useTranslation } from 'react-i18next'
import {  child01, child03, mission01 } from '../../../ressources/image'

export default function AboutUs(){
  const {t} = useTranslation()
  return (
    <div>
      <div className="py-16 bg-primary-200">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mb-16">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={mission01} alt="image" loading="lazy" width="" height=""/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('about.association.title')}</h2>
              <p className="mt-6 text-gray-600">{t('about.association.subtitle')}
              </p>
              </div>
          </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('about.mission.title')}</h2>
            <p className="mb-4">{t('about.mission.subtitle')}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full h-full contain rounded-lg my-auto" src={child01} alt="office content 1"/>
            <img className="w-full rounded-lg " src={child03} alt="office content 2"/>
        </div>
    </div>
</section>
    </div>
    </div>
    )
}
