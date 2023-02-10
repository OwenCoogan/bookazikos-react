import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useRecoilState } from 'recoil';
import { userAtom } from '../../../store';
import { createPost } from '../../../store/queries/posts/posts';
import CreatePostForm from './create-post-form/CreatePostForm';
import WritePostForm from './create-post-form/WritePostForm';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Stepper from '../../../components/design-system/stepper/Stepper';
import { ReviewPostForm } from './create-post-form/ReviewPostForm';
import UploadCoverForm from './create-post-form/UploadCoverForm';

export type PostPropType = {
  title: string;
  userId: string;
  content: any;
  image?: File;
  tags : string[];
  richContent?: string;

}

export default function CreatePost(){
  const [currentStep, setCurrentStep] = useState(0);

  const userState = useRecoilState(userAtom)[0];
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [content, setContent] = useState<any>([]);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [post, setPost] = useState<PostPropType>({
    title: '',
    userId: userState.user.id,
    content: '',
    tags: [],
    image: image,
  });

  const mutation = useMutation(
    (values:PostPropType) =>
      createPost({
        title: values.title,
        userId: values.userId,
        content: values.content,
        richContent: JSON.stringify(content),
        image: values.image,
        tags: values.tags,
      }),
      {
        onSuccess() {
          queryClient.invalidateQueries('get-all-posts');
          toast.success('Created Post successfully');
          navigate('/drafts');
        },
        onError(error: any) {
          toast.error(error.message);
        }
      }
  );

  return (
  <div
    className='p-10 pt-4 m-auto bg-gray-50'
  >
  <Stepper
    activeStep={currentStep}
    limit={3}
    setStep={setCurrentStep}
  />
  <div
    className='flex flex-row items-center justify-center'
  >


    <ReviewPostForm
    post={post}
    image={image}
    onSubmit={()=> {
      mutation.mutate(post)}}
  />
  {
    currentStep === 0 && (
      <CreatePostForm
        onSubmit={(values:PostPropType) => {
          setCurrentStep(1);
          console.log(post)
          setPost(values)
        }}
      />)
  }
  {
    currentStep === 1 && (

  <WritePostForm
    onSubmit={(values:any) => {
      setCurrentStep(2);
      console.log(post)
      setContent(values)
    }}
  />)
  }
  {
    currentStep === 2 && (

  <UploadCoverForm
    onSubmit={(values:any) => {
      setCurrentStep(3);
      setImage(values)
      console.log(image)
    }}
  />)
  }
  </div>
  </div>
);
}
