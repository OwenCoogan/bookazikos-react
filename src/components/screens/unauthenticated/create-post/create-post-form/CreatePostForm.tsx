import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';
import 'draft-js/dist/Draft.css';
import axios from 'axios';
import { userAtom } from '../../../../../store';
import { useRecoilState } from 'recoil';

type PostPropType = {
  title: string;
  userId: string;
  content: any;

}

export default function CreatePostForm() {
  const user = useRecoilState(userAtom)[0];
  const initialValues : PostPropType  = {
    title: '',
    userId: user.userProfile.id,
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
          })
          .catch((err) => {
            console.log(err);
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
      <div
          className='p-10 m-auto'
        >
          {JSON.stringify(initialValues)}
      </div>
    </Form>
  );

}


