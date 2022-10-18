import { useQuery } from 'react-query';
import PostCard from '../../components/design-system/cards/post-card/PostCard';
import Grid from '../../components/design-system/grid/Grid';
import HeaderHero from '../../components/UI/HeaderHero';
import VideoHero from '../../components/UI/VideoHero';
import { getPosts } from '../../store/queries/posts';

export default function Home(){
  const { data } = useQuery('get', getPosts);
  return (
    <div>
      <HeaderHero/>
      <Grid
        title="Latest Posts"
      >
        {
          data &&
          data.map(
            (post:any) => (
              <PostCard
                title={post.title}
                id={post.id}
                author={post.author}
                createdAt={post.createdAt}
                content={post.content}
                userId={post.userId}
              />
            )
          )
        }
      </Grid>
      <VideoHero/>
    </div>
  )
}
