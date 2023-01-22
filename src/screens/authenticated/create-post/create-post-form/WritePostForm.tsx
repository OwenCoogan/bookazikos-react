import 'draft-js/dist/Draft.css';
import { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertToRaw, EditorState } from 'draft-js';
import Button from '../../../../components/design-system/buttons/Button';




export default function WritePostForm({
  onSubmit,
}:{ onSubmit: any  }) {
  const [editorState, setEditorState] = useState(() =>
  EditorState.createEmpty()
  );


  return (
    <div
      className='flex flex-col items-center justify-center lg:1/2 m-auto  h-screen bg-white p-2'
    >
      <Button
        color='primary'
      onClick={() => onSubmit(convertToRaw(editorState.getCurrentContent()))}>Submit</Button>
      <Editor
        editorState={editorState}
        wrapperClassName="wrapperClassName h-full mb-12"
        editorClassName="editorClassName"
        onEditorStateChange={setEditorState}
      />
    </div>
  );
}

