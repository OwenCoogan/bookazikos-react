import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Tag from '../../design-system/tag/Tag';

export default function PostPage() {

  const [post, setPost] = useState({
    title: "",
    id: "",
    content: "",
    author : {
      name: "",
      avatar: "",
    },
    createdAt: ""
  });
  const {id} = useParams();

  useEffect(() => {
    axios.get(`http://localhost:6950/posts/${id}`).then((response) => {
      setPost(response.data.data);
    });
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"alt=""/>

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <Tag
                  tagTitle={post.title}
                  tagColor="blue"
                />

                <Link to="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    {post.title}
                </Link>
                <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={ post.author.avatar ? post.author.avatar :`https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`} alt=""/>

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{post.author.name}</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-8">
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              {post.content}
          </p>
        </div>
    </div>
</section>
  )
}
