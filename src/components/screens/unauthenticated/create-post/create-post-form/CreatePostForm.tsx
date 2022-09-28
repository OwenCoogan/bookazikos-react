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
import { convertToRaw, EditorState } from 'draft-js';

type PostPropType = {
  title: string;
  userId: string;
  content: any;
  richContent: any;

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
    };
  return (
    <Form
      submitMethod={(values : PostPropType ) => {
        values.richContent = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
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
      />
    </Form>
  );

}


