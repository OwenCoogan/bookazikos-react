import Grid from '../../design-system/grid/Grid';
import GridCard from '../../design-system/grid/GridCard';
import HeaderHero from '../../UI/HeaderHero';
import VideoHero from '../../UI/VideoHero';

export default function Home(

){
  return (
    <div>
      <HeaderHero/>
      <Grid
        title="Latest Posts"
      >
        <GridCard
          title="Post 1"
          description="Post 1 description"
          image="https://images.unsplash.com/photo-1610398000003-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <GridCard
          title="Post 1"
          description="Post 1 description"
          image="https://images.unsplash.com/photo-1610398000003-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
        <GridCard
          title="Post 1"
          description="Post 1 description"
          image="https://images.unsplash.com/photo-1610398000003-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </Grid>
      <VideoHero/>
    </div>
  )
}
