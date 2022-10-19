
type GridPropsType = {
  children: any;
  title: string;
  subtitle?: string;
}

export default function Grid({
  title,
  children,
  subtitle,
}: GridPropsType) {
  return (
    <section className="text-gray-600 body-font py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="container py-24 mx-auto">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">{subtitle}</p>
      </div>
      <div className="flex flex-row justify-between">
        {children}
      </div>
      </div>
    </section>
  )
}
