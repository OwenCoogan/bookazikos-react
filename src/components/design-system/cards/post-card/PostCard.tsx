import { Link } from 'react-router-dom';
import { PostTypes } from '../../@types';


export default function PostCard({
  title,
  author,
  userId,
  id,
  content,
  createdAt,
}: PostTypes ) {
  return (
    <div className="max-w-sm max-h-52 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </Link>
    <div className="p-5">
        <Link to="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <Link to={`/user/${userId}`} className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={ author?.avatar ? author.avatar :`https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80`} alt=""/>
                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{
                          author?.firstName + " " + author?.lastName
                        }</h1>
                    </div>
                </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
        <Link to={`/post/${id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
            Voir post
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>
  )
}
