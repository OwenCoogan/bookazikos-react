import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../../design-system/cards/post-card/PostCard';

export default function PostList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:6950/posts/get-posts").then((response) => {
      setPosts(response.data.data);
    });
  }, []);

  return (
    <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {
          posts &&
          posts.map(
            (post:any) => (
              <PostCard
                title={post.title}
                id={post.id}
                author={post.author}
                createdAt={post.createdAt}
              />
            )
          )
        }
    </div>
  )
}
