import { useTranslation } from 'react-i18next';

export default function ContactForm(
) {
  const { t } = useTranslation();
  return (
    <section className="bg-primary-200 h-full m-auto dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">{t('contact-form.title')}</h2>
      <form action="https://gmail.us4.list-manage.com/subscribe/post?u=57d1ccb23872ddf058dfa494d&amp;id=af1e89ad52&amp;f_id=005673e9f0" className="space-y-8">
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{t('contact-form.email-label')}</label>
              <input type="email" id="email"
        name="EMAIL"
        placeholder="name@creceEnLibertad.com"
        required={true} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
          </div>
          <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{t('contact-form.message-label')}</label>
              <textarea
        id="message"
        name="MESSAGE"
        required={true} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder={t('contact-form.message-placeholder')}></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-grey-900 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t('contact-form.submit')}</button>
      </form>
  </div>
</section>

  )
}
