import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import Grid from '../../components/design-system/grid/Grid';
import PostGalleryCard from '../../components/design-system/post-gallery/PostGalleryCard';
import HeaderHero from '../../components/UI/HeaderHero';
import NewsletterSection from '../../components/UI/newsletter-section/NewsletterSection';
import VideoHero from '../../components/UI/VideoHero';
import { getPosts } from '../../store/queries/posts/posts';

export default function Home(){
  const { t } = useTranslation();
  const { data } = useQuery('getPosts', getPosts);
  return (
    <div>
      <HeaderHero
      />
      <Grid
        title={t('home.latestPosts')}
        subtitle={t('home.latestPostsSubtitle')}
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
