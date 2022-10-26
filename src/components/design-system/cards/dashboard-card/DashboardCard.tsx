type DataCardPropsType = {
  title: string,
  children: React.ReactNode,
}

export default function DashboardCard({
  title,
  children
}: DataCardPropsType) {
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
      <div className="flex items-center">
        <div className="flex-shrink-0">
            <h3 className="text-base font-normal text-gray-500">{title}</h3>
        </div>
        {children}
      </div>
  </div>
  )
}
