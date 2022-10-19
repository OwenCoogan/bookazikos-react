import { Link } from 'react-router-dom';
import { PostTypes } from '../@types';

type PostGalleryCardProps = {
    post:PostTypes
}

export default function PostGalleryCard({
    post
}: PostGalleryCardProps){
  return (

    <article className="max-w-xs mx-auto">
        <Link to={`/post/${post.id}`}>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-5 rounded-lg" alt="Image 2"/>
        </Link>
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="mb-4 font-light text-gray-500 dark:text-gray-400">{post.content}</p>
        <Link to={`/post/${post.id}`} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 12 minutes
        </Link>
    </article>
  )
}
