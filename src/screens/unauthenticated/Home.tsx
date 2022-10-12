import axios from 'axios';
import { useEffect, useState } from 'react';
import PostCard from '../../components/design-system/cards/post-card/PostCard';
import Grid from '../../components/design-system/grid/Grid';
import HeaderHero from '../../components/UI/HeaderHero';
import VideoHero from '../../components/UI/VideoHero';

export default function Home(

){
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:6950/posts/get-posts").then((response) => {
      setPosts(response.data.data);
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
