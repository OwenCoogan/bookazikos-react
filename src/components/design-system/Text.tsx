enum TextVariants {
  'body' = 'body',
  "title" = "title",
  "subtitle" = "subtitle",
  "caption" = "caption",
  "overline" = "overline",
  "button" = "button",
  "link" = "link",
  "navlink" = "navlink text-gray-900 dark:text-gray-300 hover:bg-gray-50 focus:ring-4 w-32 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 lg:px-4 py-2 lg:py-2.5 mr-2 md:mr-3 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800",
}

type TextPropsType = {
  text: string,
  variant: keyof typeof TextVariants,
  additionalClasses?: string,
}


export default function Text({
  text,
  variant,
  additionalClasses,
}:TextPropsType){
  return (
    <p
      className={`${TextVariants[variant]} ${additionalClasses}`}
    >
      {text}
    </p>
  )
}
