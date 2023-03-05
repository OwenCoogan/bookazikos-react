import axios from 'axios';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TeamBannerCard from './TeamBannerCard';

type UserType = {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  occupation: string;
    description: string;
}

export default function TeamBanner() {
    const {t}= useTranslation();
    const [team, setTeam] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:6950/team/get-users')
        .then((response) => {
          setTeam(response.data.data);
        })
    }, []);
  return (
    <section className="bg-primary-200 dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t('team-section.title')}</h2>
          </div>
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
            {
                team && team.map((member:UserType) => (
                    <TeamBannerCard
                        key={member.id}
                        name={member.firstName + ' ' + member.lastName}
                        occupation={member.occupation}
                        description={member.description}
                        email={member.email}                    />
                ))
            }
      </div>
  </div>
</section>

  )
}
