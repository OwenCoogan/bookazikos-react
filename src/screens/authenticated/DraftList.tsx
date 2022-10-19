import axios from 'axios';
import { useEffect, useState } from 'react';
import PostGalleryCard from '../../components/design-system/post-gallery/PostGalleryCard';

export default function DraftsList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6950/posts/get-drafts").then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-24">
        {
          posts &&
          posts.map(
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
