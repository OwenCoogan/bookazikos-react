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
import { validationSchema } from './CreateFormPost.validation';
import { Formik,Form } from 'formik';
import { createPost } from '../../../../store/queries/posts/posts';
import { useMutation, useQueryClient } from 'react-query';

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
  const queryClient = useQueryClient();
  const [currentImage,setCurrentImage] = useState("");
  const [currentImageFile,setCurrentImageFile] = useState<File>();
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
  );
  const initialValues : PostPropType  = {
    title: '',
    userId: userState.user.id,
    content: '',
    richContent: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    tags: [],
    image: currentImageFile,
    };


  const mutation = useMutation(
    (values:typeof initialValues) =>
      createPost({
        ...values,
      }),
      {
        onSuccess() {
          queryClient.invalidateQueries('get-all-posts');
          toast.success('Created Post successfully');
          navigate('/drafts');
        },
        onError(error: any) {
          toast.error(error.message);
        }
      }
  );
  return (
    <Formik
         initialValues={initialValues}
        validationSchema={validationSchema}
         onSubmit={(values) => {
          console.log(values)
          mutation.mutate(values)
         }}
       >
        {({ errors, touched, isSubmitting, setFieldValue,values }) => {

        async function addImage({image}: {image: any}) {
          setCurrentImage(image)
          console.log(currentImage)
        }
        function setTags(tags: string[]) {
          values.tags = tags
        }
          return (
    <Form

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
              setFieldValue('title', event.target.value);
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
              setFieldValue('content', event.target.value);
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
      <button
        type="submit"
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'
      >
        Submit
      </button>
    </Form>
    )}}
    </Formik>
  );

}

