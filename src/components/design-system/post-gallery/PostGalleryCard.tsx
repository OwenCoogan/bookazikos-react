import moment from 'moment';
import { Link } from 'react-router-dom';
import { PostTypes } from '../@types';
import Tag from '../tag/Tag';

type PostGalleryCardProps = {
    post:PostTypes
}

export default function PostGalleryCard({
    post
}: PostGalleryCardProps){
  return (

    <article className="max-w-xs shadow-md mx-1">
        <Link to={`/post/${post.id}`}>
            <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png" className="mb-2 rounded-lg max-w-xs w-full" alt="Image 2"/>
        </Link>
        <div className="p-4">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
        </h2>
        <Tag
                tagTitle={moment(post.createdAt).format("DD MMM YYYY")}
                tagColor="success"
            />
        <div
            className="items-start w-xs mt-4"
        >
            {
                post.tags && post.tags.map((tag: any) => {
                    return <Tag
                        key={tag.id}
                        tagTitle={tag.name}
                        tagColor="primary"
                    />
                })
            }
        </div>
        <p className="my-2 font-light text-gray-500 dark:text-gray-400">{post.content}</p>
        <Link to={`/post/${post.id}`} className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline">
            Read in 12 minutes
        </Link>
        </div>
    </article>
  )
}
