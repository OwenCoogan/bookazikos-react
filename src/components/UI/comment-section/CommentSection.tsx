import axios from 'axios';
import { useState } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
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
  const queryClient = useQueryClient()
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
      queryClient.setQueryData(['get'], response.data.data);
      toast.success("Comment added successfully");
      console.log(response);
    })
  }
  return (
    <section className="bg-white dark:bg-gray-900 py-8 lg:py-16">
    <div className=" mx-auto w-full md:w-full mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion ({comments.length})</h2>
      </div>
      <Form
        initialValues={initialValues}
        submitMethod={() => submitMethod()}
        validationSchema={null}>
          <div className="py-2 mb-4 bg-white rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
              <label className="sr-only">Your comment</label>
              <TextInput
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
