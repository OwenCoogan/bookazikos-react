import { cp } from 'fs';
import { useQuery } from 'react-query';
import PostCard from '../../components/design-system/cards/post-card/PostCard';
import Grid from '../../components/design-system/grid/Grid';
import PostGalleryCard from '../../components/design-system/post-gallery/PostGalleryCard';
import HeaderHero from '../../components/UI/HeaderHero';
import NewsletterSection from '../../components/UI/newsletter-section/NewsletterSection';
import VideoHero from '../../components/UI/VideoHero';
import { getPosts } from '../../store/queries/posts/posts';

export default function Home(){
  const { data } = useQuery('getPosts', getPosts);
  return (
    <div>
      <HeaderHero
      />
      <Grid
        title="Latest Posts"
        subtitle="Check out the latest posts"
      >
        {
          data && data.length >0 &&
          data.map(
            (post:any) => (
              <PostGalleryCard
                post={post}
              />
            )
          )
        }
      </Grid>
      <VideoHero/>
      <NewsletterSection/>
    </div>
  )
}
