import { Link } from 'react-router-dom';
import PostListCardItem from './PostListCardItem';

export default function PostListCard(
   posts:any,
) {
   console.log(posts)
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div className="mb-4 flex items-center justify-between">
                        <div>
                           <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Posts</h3>
                        </div>
                        <div className="flex-shrink-0">
                           <Link to="/posts" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">View all</Link>
                        </div>
                     </div>
                     <div className="flex flex-col mt-8">
                        <div className="overflow-x-auto rounded-lg">
                           <div className="align-middle inline-block min-w-full">
                              <div className="shadow overflow-hidden sm:rounded-lg">
                                 <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                       <tr>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Title
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Author
                                          </th>
                                          <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Date
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                       {
                                          posts.posts.map(
                                             (post:any) => (
                                                <PostListCardItem
                                                   post={post}
                                                />
                                          ))
                                       }
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
  )
}
