import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../store';
import Form from '../../design-system/form/Form';
import TextInput from '../../design-system/TextInput';
import Comment from './Comment';

type CommentSectionPropsType = {
  postId: string;
  comments: never[];
}

export default function CommentSection({
  postId,
  comments,
}: CommentSectionPropsType) {
  const [commentContent, setCommentContent] = useState('');

  const initialValues = {
    content: commentContent,
  }
  const user = useRecoilValue(userAtom);
  function submitMethod(){
    axios.post(
      `http://localhost:6950/posts/${postId}/comment/add`,{
        content: commentContent,
        postId: postId,
        userId: user.user.id,
      }
    )
    .then((response) => {
      console.log(response);
    })
  }
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({comments.length})</h2>
      </div>
      <Form
        initialValues={initialValues}
        submitMethod={(values: any) => submitMethod()}
        validationSchema={null}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label className="sr-only">Your comment</label>
              <TextInput
                label="Comment"
                inputName="comment"
                placeholder="Comment"
                type="text"
                onChange={(event) => {
                  setCommentContent(event.target.value);
                  console.log(event.target.value);
                }}
              />
          </div>
      </Form>
      <div className="space-y-6">
        {comments.map((comment: any) => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
            />
          )
        })}
      </div>
      </div>
    </section>
  )
}
