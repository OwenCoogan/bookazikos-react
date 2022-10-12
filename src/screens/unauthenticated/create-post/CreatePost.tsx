import CreatePostForm from './create-post-form/CreatePostForm';


export default function CreatePost(){
  return (
  <div
    className='p-10 m-auto'
  >
  <h2
    className='text-2xl font-bold text-center mb-10'
  >
    Create Post
  </h2>
  <CreatePostForm/>
  </div>
);
}
