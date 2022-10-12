import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Tag from '../../components/design-system/tag/Tag';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, EditorState } from 'draft-js';
import moment from 'moment';

export default function PostPage() {

  const newEditor = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(newEditor);

  function publishProgram(){
    console.log("Publishing program")
    axios.post('http://localhost:6950/posts/publish-post', {
      id: post.id,
    })
      .then((res) => {
        console.log(res.data);
      })
  }


  const [post, setPost] = useState({
    title: "",
    id: "",
    content: "",
    publicationStatus: "",
    author : {
      firstName: "",
      lastName: "",
      avatar: "",
    },
    createdAt: ""
  });
  const {id} = useParams();
  useEffect(() => {
    axios.get(`http://localhost:6950/posts/${id}`).then((response) => {
      setPost(response.data.data);
      setEditorState(EditorState.createWithContent(convertFromRaw(response.data.data.richContent)));
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 max-w-1/2 p-10 m-auto flex flex-col gap-4 w-2xl">
    <div className="px-6 py-10 mx-auto flex-row sm:flex-col">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <Tag
                  tagTitle={post.publicationStatus.toUpperCase()}
                  tagColor={
                    post.publicationStatus === "published" ? "success" : "warning"
                  }
                />
                {
                  post.publicationStatus === "draft" &&
                  <button
                  onClick={publishProgram}
                  >
                    Publish
                  </button>
                }
                <Tag
                  tagTitle={moment(post.createdAt).calendar()}
                  tagColor="primary"
                />
                <h2 className="block mt-4 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                    {post.title}
                </h2>
                <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={ `https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`} alt=""/>
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{
                          post.author.firstName + " " + post.author.lastName
                        }</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {post.content}
          </p>
        </div>
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
    </div>
</section>
  )
}
