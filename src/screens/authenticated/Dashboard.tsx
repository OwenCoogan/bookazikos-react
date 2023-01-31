import { useRecoilValue } from 'recoil';
import { postListAtom } from '../../store/post';
import DataCard from '../../components/design-system/cards/data-card/DataCard';
import PostListCard from '../../components/design-system/cards/post-list-card/PostListCard';
import { useQuery } from 'react-query';
import { getAdminData } from '../../store/queries/users/auth';
import ButtonLink from '../../components/design-system/buttons/ButtonLink';
import { Routes } from '../../@types';
import { useTranslation } from 'react-i18next';

export default function Dashboard(){
  const { t   } = useTranslation();
    const posts = useRecoilValue(postListAtom);
    const { data } = useQuery('get', getAdminData);
    return (
      <>
        <div
          className="flex flex-col items-center justify-center w-full h-full bg-gray-50 p-10"
        >
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <DataCard
              title={t("dashboard.total-posts")}
              displayValue={posts.length}
              calculatedValue={100}
            />
            <DataCard
              title={t("dashboard.total-users")}
              displayValue={data?.numberOfUsers}
            />
            <DataCard
              title={t("dashboard.total-comments")}
              displayValue={data?.numberOfComments}
            />

            <DataCard
              title={t("dashboard.total-admin-invitations")}
              displayValue={data?.adminInvitationsPending}
            />
                  <div
                    className="flex flex-col items-center justify-center w-full h-full p-1"
                  >
                  <ButtonLink
                    route={Routes.sendAdminInvitation}
                    text={t("dashboard.send-admin-invitation")}
                  />
                  </div>
          </div>
          <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <PostListCard
              posts={posts ? posts : []}
            />
          </div>
        </div>
      </>
    )
  }
