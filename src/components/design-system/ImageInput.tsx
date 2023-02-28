import React, { useState } from "react";

type UploadAndDisplayImageProps = {
  onSubmit: (e: any) => void;
}

const UploadAndDisplayImage = ({onSubmit}: UploadAndDisplayImageProps) => {
  const [selectedImage, setSelectedImage] = useState<File>();

  return (
    <div>
      <h1>Upload and Display Image usign React Hook's</h1>
      {selectedImage && (
        <div>
        <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
        <br />
        <button onClick={()=>setSelectedImage(undefined)}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          setSelectedImage(event.target.files![0]);
          onSubmit(event.target.files![0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
