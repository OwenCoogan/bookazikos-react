import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../../design-system/cards/post-card/PostCard';
import Grid from '../../design-system/grid/Grid';
import HeaderHero from '../../UI/HeaderHero';
import VideoHero from '../../UI/VideoHero';

export default function Home(

){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6950/posts/get-posts").then((response) => {
      setPosts(response.data.data);
      console.log(posts)
    });
  }, []);
  return (
    <div>
      <HeaderHero/>
      <Grid
        title="Latest Posts"
      >
        {posts.map((post:any) => {
          <PostCard
            title={post.title}
            id={post.id}
            author={post.author}
            createdAt={post.createdAt}
            content={post.content}
            userId={post.userId}
          />
        })}
      </Grid>
      <VideoHero/>
    </div>
  )
}
