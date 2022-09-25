import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';
import 'draft-js/dist/Draft.css';
import axios from 'axios';
import { userAtom } from '../../../../../store';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from 'draft-js';

type PostPropType = {
  title: string;
  userId: string;
  content: any;

}

export default function CreatePostForm() {
  const userState = useRecoilState(userAtom)[0];
  const navigate = useNavigate();
  const newEditor = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(newEditor);
  const initialValues : PostPropType  = {
    title: '',
    userId: userState.user.id,
    content: '',
    };
  return (
    <Form
      submitMethod={(values : PostPropType ) => {
        console.log(values)
        axios.post(
          'http://localhost:6950/posts/create-post',
          values,
        )
          .then((res) => {
            console.log(res.data);
            navigate('/posts');
            toast.success('Post created successfully');

          })
          .catch((err) => {
            console.log(err);
            toast.error('Something went wrong');
          });
      }}
      initialValues={initialValues}
      validationSchema={{}}
    >
      <TextInput
        label="Title"
        inputName="title"
        placeholder="Title"
        type="text"
        onChange={(event) => {
          initialValues.title = event.target.value;
          console.log(initialValues)
        }}
      />
      <TextInput
        label="content"
        inputName="content"
        placeholder="content"
        type="content"
        onChange={(event) => {
          initialValues.content = event.target.value;
          console.log(initialValues);
        }}
      />
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />;
      <div
          className='p-10 m-auto'
        >
          {JSON.stringify(initialValues)}
      </div>
    </Form>
  );

}


