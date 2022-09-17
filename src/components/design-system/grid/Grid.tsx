
type GridPropsType = {
  children: any;
  title: string;
}

export default function Grid({
  title,
  children,
}: GridPropsType) {
  return (
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h2>{title}</h2>
          <div className="flex flex-wrap -m-4">
            {children}
          </div>
      </div>
    </section>
  )
}
