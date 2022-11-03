import axios from 'axios';
import { useEffect, useState } from 'react';
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
    const [team, setTeam] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:6950/team/get-users')
        .then((response) => {
          setTeam(response.data.data);
        })
    }, []);
  return (
    <section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Team</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Explore the whole collection of open-source web components and elements built with the utility classNamees from Tailwind</p>
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
