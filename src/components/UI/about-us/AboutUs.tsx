import React from 'react'
import { useTranslation } from 'react-i18next'
import { bannerImage, mission01 } from '../../../ressources/image'

export default function AboutUs(){
  const {t} = useTranslation()
  return (
      <div className="py-16 bg-primary-200">
      <div className="container m-auto px-6md:px-12 xl:px-6">
        <div className="m-auto text-center mb-12">
            <h1 className="max-w-xl m-auto text-xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Building digital products & brands.</h1>
        </div>
      </div>
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mb-16">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img src={mission01} alt="image" loading="lazy" width="" height=""/>
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">{t('about.association.title')}</h2>
              <p className="mt-6 text-gray-600">{t('about.association.subtitle')}
              </p>
              </div>
          </div>
      </div>
      <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
        </div>
    </div>
</section>
    </div>
    )
}
