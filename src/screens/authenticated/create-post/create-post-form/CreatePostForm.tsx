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
import createInlineToolbarPlugin from '@draft-js-plugins/inline-toolbar';
import ImageInput from '../../../../components/design-system/ImageInput';

type PostPropType = {
  title: string;
  userId: string;
  content: any;
  richContent: any;
  images?: any;
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
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
  );
  const initialValues : PostPropType  = {
    title: '',
    userId: userState.user.id,
    content: '',
    richContent: JSON.stringify(convertToRaw(editorState.getCurrentContent())),
    tags: [],
    images : [],
    };
  function setTags(tags: string[]) {
    initialValues.tags = tags
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
          <ImageInput
            handleSubmit={(file: any) => {
              initialValues.images.push(file);
            }}
          />
        </div>
        <div
          className='lg:m-auto justify-center items-center lg:w-1/2 h-96'
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


