import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../../store';
import Form from '../../design-system/form/Form';
import TextInput from '../../design-system/TextInput';
import Comment from './Comment';

type CommentSectionPropsType = {
  postId: string;
  comments: [];
}

export default function CommentSection({
  postId,
  comments,
}: CommentSectionPropsType) {
  const initialValues = {
    comment: '',
  }
  const user = useRecoilValue(userAtom);
  function submitMethod(values: any){
    axios.post(
      `http://localhost:6950/posts/${postId}/comment/add`,{
        comment: values.comment,
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
          <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (20)</h2>
      </div>
      <Form
        initialValues={initialValues}
        submitMethod={(values: any) => submitMethod(initialValues)}
        validationSchema={null}>
          <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <label className="sr-only">Your comment</label>
              <TextInput
                label="Comment"
                inputName="Comment"
                placeholder="Comment"
                type="text"
                onChange={(event) => {
                  initialValues.comment = event.target.value;
                }}
              />
          </div>
      </Form>
      <>
      {
        comments.map((comment) => {
          <Comment
            comment={comment}
          />
        })
      }
      </>
      </div>
    </section>
  )
}
