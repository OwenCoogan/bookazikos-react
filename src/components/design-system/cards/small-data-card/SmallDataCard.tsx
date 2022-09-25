type SmallDataCardProps = {
  text: string;
  value: string | number;
}


export default function SmallDataCard({
  value,
  text,
}: SmallDataCardProps) {
  return (
    <div className="mr-4 p-3 text-center">
    <span className="text-xl font-bold block uppercase tracking-wide text-yellowGray-600">{value}</span><span className="text-sm text-yellowGray-400">{text}</span>
  </div>
  )
}
