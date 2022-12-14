import { useRecoilValue } from 'recoil';
import { draftListAtom, postListAtom } from '../../store/post';
import DataCard from '../../components/design-system/cards/data-card/DataCard';
import PostListCard from '../../components/design-system/cards/post-list-card/PostListCard';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAdminData } from '../../store/queries/users/auth';
import DashboardCard from '../../components/design-system/cards/dashboard-card/DashboardCard';
import { NavLink } from 'react-router-dom';

export default function Dashboard(){
    const posts = useRecoilValue(postListAtom);
    const { data } = useQuery('get', getAdminData);
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
              displayValue={data?.numberOfUsers}
            />
            <DataCard
              title="Total Comments"
              displayValue={data?.numberOfComments}
            />
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PostListCard
              title = "Latest Posts"
              posts={posts ? posts : []}
            />
            <div>
              <DashboardCard
                title="Send Admin Email"
                >
                  <NavLink
                    to="/send-admin-invitation"
                  >
                    Hello World
                    </NavLink>
                </DashboardCard>
            </div>
          </div>

        </div>
      </>
    )
  }
