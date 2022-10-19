type NumberBadgeType = {
  number: number;
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

export default function NumberBadge({
  number,
  color,
}: NumberBadgeType) {
  return (
    <span className={`inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-${color}-600 bg-${color}-200 rounded-full dark:bg-${color}-900 dark:text-${color}-200 mr-2.5`}>{number}</span>
  )
}
