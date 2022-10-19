type NumberBadgeType = {
  number: number;
  color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

export default function NumberBadge({
  number,
  color,
}: NumberBadgeType) {
  return (
    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">{number}</span>
  )
}
