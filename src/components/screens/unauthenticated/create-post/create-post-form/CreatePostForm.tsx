import { Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';

type PostPropType = {
  title: string;
  description: string;
  content: any;

}

export default function CreatePostForm() {
  const values : PostPropType  = {
    title: '',
    description: '',
    content: undefined,
    };
  const [editorState, setEditorState] = useState(EditorState);
  return (
    <Form
      submitMethod={(values : PostPropType ) => {
        console.log(values)
      }
      }
      initialValues={values}
      validationSchema={{}}
    >
      <TextInput
        label="Title"
        inputName="title"
        placeholder="Title"
        type="text"
        onChange={() => { }}

      />
      <TextInput
        label="description"
        inputName="description"
        placeholder="description"
        type="text"
        onChange={() => { }}
      />
      <div
          className='p-10 m-auto'
        >
      </div>
    </Form>
  );
}


