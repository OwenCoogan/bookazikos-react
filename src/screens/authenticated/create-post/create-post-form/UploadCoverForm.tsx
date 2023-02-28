import ImageInput from '../../../../components/design-system/ImageInput';

export default function UploadCoverForm({onSubmit}: {onSubmit: (file: File) => void}) {

  async function addImage(event:any) {
    onSubmit(event);
  }
  return (
    <div
      className='flex flex-col items-center justify-center lg:1/2 m-auto  h-screen bg-white p-2'
    >
    <ImageInput
      onSubmit={addImage}
    />
    </div>
  )
}
