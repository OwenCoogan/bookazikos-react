import TextInput from '../../../../components/design-system/TextInput';
import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import TagsInput from '../../../../components/design-system/TagsInput';
import ImageInput from '../../../../components/design-system/ImageInput';
import { validationSchema } from './CreateFormPost.validation';
import { Formik,Form } from 'formik';
import { PostPropType } from '../CreatePost';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../../store';


function onKeyDown(e: any) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
}

type CreatePostFormPropTypes = {
  onSubmit: (values: PostPropType) => void;
}



export default function CreatePostForm({
  onSubmit,
}: CreatePostFormPropTypes) {

  const userState = useRecoilState(userAtom)[0];
  const initialValues : PostPropType  = {
    title: '',
    content: '',
    userId: userState.user.id,
    tags: [],
    image: undefined,
    };

  return (
    <Formik
         initialValues={initialValues}
        validationSchema={validationSchema}
         onSubmit={(values) => {
          console.log(values)
          onSubmit(values)
         }}
       >
        {({ errors, touched, isSubmitting, setFieldValue,values }) => {

        function setTags(tags: string[]) {
          values.tags = tags
        }
          return (
      <Form
        className='flex flex-col w-3/5 m-auto mt-0 bg-white p-2'
      >
      <div className='flex flex-col lg:flex-row'>
        <div
          className='flex flex-col w-full'
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
        </div>
      </div>
      <button
        type="submit"
        className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-1/4 lg:m-auto'
      >
        Submit
      </button>
    </Form>
    )}}
    </Formik>
  );

}

