import { useQuery } from 'react-query';
import PostGalleryCard from '../../components/design-system/post-gallery/PostGalleryCard';
import { getPosts } from '../../store/queries/posts/posts';

export default function PostList() {
  const { data } = useQuery('get', getPosts);
  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-32">
        {
          data &&
          data.map(
            (post:any) => (
              <PostGalleryCard
                post={post}
              />
            )
          )
        }
    </div>
  )
}
