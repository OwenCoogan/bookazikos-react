import { ContentState, convertToRaw, Editor, EditorState } from 'draft-js';
import { useState } from 'react';
import Form from '../../../../design-system/form/Form';
import TextInput from '../../../../design-system/TextInput';
import 'draft-js/dist/Draft.css';

type PostPropType = {
  title: string;
  description: string;
  content: any;

}

export default function CreatePostForm() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const contentState:ContentState = editorState.getCurrentContent();
  const values : PostPropType  = {
    title: '',
    description: '',
    content: convertToRaw(contentState),
    };
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
        onChange={(event) => {
          values.title = event.target.value;
        }}

      />
      <TextInput
        label="description"
        inputName="description"
        placeholder="description"
        type="text"
        onChange={(event) => {
          values.description = event.target.value;
        }}
      />
      <div
          className='p-10 m-auto'
        >

      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="Tell a story..."
        ariaControls='my-editor'
      />
      </div>
    </Form>
  );

}


