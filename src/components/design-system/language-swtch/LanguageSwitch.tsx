import { useState } from 'react'
import i18n from '../../../providers/localization/i18next'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import { useTranslation } from 'react-i18next'

enum Language {
  Spanish = 'es',
  French = 'fr',
  English = 'en',
}

enum UsedFlags {
  English = 'GB',
  French = 'FR',
  Spanish = 'MX',
}

export default function LanguageSwitch(){
  const { t } = useTranslation()
  const [ language, setLanguage ] = useState<Language>(Language.Spanish)
  const [ listActive, setListActive ] = useState<boolean>(false)
  return (
    <div className="relative inline-block text-left">
    <button type="button" onClick={()=>setListActive(!listActive)}data-dropdown-toggle="language-dropdown" className="inline-flex items-center text-gray-900 dark:text-gray-300 hover:bg-gray-50 focus:ring-4 w-32 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
        <span className="hidden mr-2 md:inline">{t(`languages.${language}`)}</span>
        <svg className="hidden w-4 h-4 md:inline" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
    </button>
    {listActive === true &&
     <div
      className="origin-top-right absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none flex- flex-col"
     >
      {
        Object.keys(Language).map(key =><button
          className='px-2 py-1 hover:bg-gray-100 w-full text-left justify-between flex flex-row'
          onClick={()=>{
            setListActive(false)
            i18n.changeLanguage(Language[key as keyof typeof Language])
            setLanguage(t(Language[key as keyof typeof Language]))}}
        >{t(`languages.${Language[key as keyof typeof Language]}`)}<div>{getUnicodeFlagIcon(
           UsedFlags[key as keyof typeof Language].toUpperCase()
        )}</div></button> )
      }
    </div>}
    </div>
  )
}
