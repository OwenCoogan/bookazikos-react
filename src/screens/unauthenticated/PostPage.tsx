import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Tag from '../../components/design-system/tag/Tag';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, EditorState } from 'draft-js';
import moment from 'moment';
import { toast } from 'react-toastify';
import Button from '../../components/design-system/buttons/Button';
import CommentSection from '../../components/UI/comment-section/CommentSection';
import { getPost } from '../../store/queries/posts';
import { useQuery } from 'react-query';
import PostHeader from '../../components/design-system/post-header/PostHeader';
export default function PostPage() {

  const newEditor = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(newEditor);

  function publishProgram(){
    axios.post('http://localhost:6950/posts/publish-post', {
      id: post.id,
    })
    .then((response) => {
      console.log(response);
      toast.success("Post published successfully");
    })
  }


  const [post, setPost] = useState({
    title: "",
    id: "",
    content: "",
    publicationStatus: "",
    comments:[],
    tags: [],
    author : {
      firstName: "",
      lastName: "",
      avatar: "",
    },
    createdAt: ""
  });
  const {id} = useParams();
  const { data } = useQuery('get-single-post', () => getPost(id));
  useEffect(() => {
    if(data){
      setPost(data);
      setEditorState(EditorState.createWithContent(convertFromRaw(data.richContent)));
    }
  });

  return (
    <section className="bg-white dark:bg-gray-900 max-w-1/2 p-10 m-auto flex flex-col gap-4 w-2xl lg:h-96 w-full">
    <div className="px-6 py-10 w-1/2 mx-auto flex-row sm:flex-col">
      <div className='flex flex-row gap-4'>
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white mb-6">From the blog</h1>
        <div
          className="flex flex-row items-left justify-left mt-4 mb-6 align-right">
                <Button
                size='small'
                color='primary'
                onClick={publishProgram}
              >
                Publish
              </Button>
        </div>
      </div>
        <PostHeader
          title={post.title}
          author={post.author}
          createdAt={post.createdAt}
          publicationStatus={post.publicationStatus}
          tags={post.tags}
        />
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <Editor
            editorState={editorState}
            toolbarHidden={true}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            readOnly={true}
          />
        </div>
        <CommentSection
          postId={post.id}
          comments={post.comments}
        />

    </div>
</section>
  )
}
