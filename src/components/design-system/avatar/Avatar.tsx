type AvatarProps = {
  src?: string;
  alt?: string;
  user?:{
    firstName?: string | undefined;
    lastName?: string | undefined;
  }
}

export default function Avatar({
  src,
  user,
} : AvatarProps) {

  return (
    <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600 mr-2">
    <span className="font-medium text-gray-600 dark:text-gray-300">{
      user?.firstName ? user?.firstName?.charAt(0) + user?.lastName?.charAt(0) : 'UU'
    }</span>
    </div>
  )
}
