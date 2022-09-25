import { useRecoilValue } from 'recoil';
import { postListAtom } from '../../../store/post';
import DataCard from '../../design-system/cards/data-card/DataCard';
import PostListCard from '../../design-system/cards/post-list-card/PostListCard';

export default function Dashboard(

  ){
    const posts = useRecoilValue(postListAtom);
    return (
      <>
        <div
          className="flex flex-col items-center justify-center w-full h-full bg-gray-50 p-10"
        >
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <DataCard
              title="Total Posts"
              displayValue={posts.length}
              calculatedValue={100}

            />
            <DataCard
              title="Total Posts"
              displayValue="100"
            />
            <DataCard
              title="Total Posts"
              displayValue="100"
            />
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PostListCard
              posts={posts}
            />
          </div>
        </div>
      </>
    )
  }
