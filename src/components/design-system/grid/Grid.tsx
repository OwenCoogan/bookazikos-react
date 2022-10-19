
type GridPropsType = {
  children: any;
  title: string;
}

export default function Grid({
  title,
  children,
}: GridPropsType) {
  return (
    <section className="text-gray-600 body-font py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="container px-5 py-24 mx-auto">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">We use an agile approach to test assumptions and connect with the needs of your audience early and often.</p>
      </div>
      <div className="flex flex-row">
        {children}
      </div>
      </div>
    </section>
  )
}
