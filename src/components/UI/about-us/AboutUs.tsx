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
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 mb-16">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Notre mission</h2>
              <p className="mt-6 text-gray-600"> Acompañar a las niñeces y adolescentes a conocer y disfrutar de sus derechos a través de métodos de educación participativos como la educación artística, el juego y el deporte. El objetivo principal es la creación de espacios inclusivos donde se escuchen sus voces y se transformen en iniciativas con un enfoque de niñez, de género e intercultural
              </p>
              </div>

            <div className="md:5/12 lg:w-5/12">
              <img src={bannerImage} alt="image" loading="lazy" width="" height=""/>
            </div>
          </div>
      </div>
    </div>
    )
}
