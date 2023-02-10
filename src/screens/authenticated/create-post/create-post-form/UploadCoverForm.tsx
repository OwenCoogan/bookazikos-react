import ImageInput from '../../../../components/design-system/ImageInput';

export default function UploadCoverForm({onSubmit}: {onSubmit: (file: File) => void}) {
  async function addImage(event:any) {
    const file = event.target.files[0];
    onSubmit(file);
  }
  return (
    <div
      className='flex flex-col items-center justify-center lg:1/2 m-auto  h-screen bg-white p-2'
    >
    <h2 className="text-center mb-4">Uploaded Image</h2>
    <ImageInput
      onSubmit={addImage}
      previewVisible={true}
    />
    </div>
  )
}
