type FormWrapperPropTypes = {
  children: any
}

export default function FormWrapper({
  children
}:FormWrapperPropTypes){
  return (
    <div
      className='bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-3xl mx-auto'
    >
      {children}
    </div>
  )
}
