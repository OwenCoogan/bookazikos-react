import Form from '../../../../components/design-system/form/Form';
import TextInput from '../../../../components/design-system/TextInput';
import 'draft-js/dist/Draft.css';
import axios from 'axios';
import { userAtom } from '../../../../store';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from 'draft-js';
import TagsInput from '../../../../components/design-system/TagsInput';
import ImageInput from '../../../../components/design-system/ImageInput';

type PostPropType = {
  title: string;
  userId: string;
  content: any;
  richContent: any;
  image?: any;
  tags : string[];

}

function onKeyDown(e: any) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}



export default function CreatePostForm() {
  const userState = useRecoilState(userAtom)[0];
  const navigate = useNavigate();
  const [currentImage,setCurrentImage] = useState("");
  const [currentImageFile,setCurrentImageFile] = useState({});
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
  );
  const initialValues : PostPropType  = {
    title: '',
    userId: userState.user.id,
    content: '',
    richContent: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    tags: [],
    image : currentImageFile,
    };
  function setTags(tags: string[]) {
    initialValues.tags = tags
  }
  async function addImage({image, file}: {image: string, file: any}) {
    setCurrentImage(image)
    setCurrentImageFile(file)
    console.log(file)
  }
  return (
    <>
    <Form
      submitMethod={(values : PostPropType ) => {
        values.richContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
        axios.post(
          'http://localhost:6950/posts/create-post',
          values,
        )
          .then((res) => {
            navigate('/posts');
            toast.success('Post created successfully');

          })
          .catch((err) => {
            toast.error('Something went wrong');
          });
      }}
      initialValues={initialValues}
      validationSchema={{}}
    >
      <div className='flex flex-col lg:flex-row'>
        <div
          className='flex flex-col w-full lg:w-1/3'
        >
          <TextInput
            label="Title"
            inputName="title"
            placeholder="Title"
            type="text"
            onChange={(event) => {
              initialValues.title = event.target.value;
            }}
            onKeyDown={onKeyDown}
          />
          <TagsInput
            handleSubmit={setTags}
          />
          <TextInput
            label="content"
            inputName="content"
            placeholder="content"
            type="content"
            onChange={(event) => {
              initialValues.content = event.target.value;
            }}
            onKeyDown={onKeyDown}
          />
             <h2 className="text-center mb-4">Uploaded Image</h2>
            {
              currentImage && <img src={currentImage} alt={currentImage} className="w-20 mx-auto mb-4"/>
            }
          <ImageInput
            onSubmit={addImage}
            previewVisible={false}
          />
        </div>
        <div
          className='lg:mx-auto justify-center items-center lg:w-1/2 h-96'
        >
          <Editor
            editorState={editorState}
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={setEditorState}
          />
        </div>
      </div>
    </Form>
    </>
  );

}


