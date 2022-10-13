import { useRecoilValue } from 'recoil';
import { draftListAtom, postListAtom } from '../../store/post';
import DataCard from '../../components/design-system/cards/data-card/DataCard';
import PostListCard from '../../components/design-system/cards/post-list-card/PostListCard';
import { useEffect } from 'react';

export default function Dashboard(){
    const posts = useRecoilValue(postListAtom);
    const [drafts] = useRecoilValue(draftListAtom);
    useEffect(() => {
    }, [posts, drafts]);

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
              title="Total Users"
              displayValue="100"
            />
            <DataCard
              title="Total Comments"
              displayValue="100"
            />
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PostListCard
              title = "Latest Posts"
              posts={posts ? posts : []}
            />
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PostListCard
              title = "Drafts"
              posts={drafts ? drafts : []}
            />
          </div>
        </div>
      </>
    )
  }
