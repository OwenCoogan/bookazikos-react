import axios from 'axios';
import { useEffect, useState } from 'react';
import TeamUserCard from '../design-system/team/TeamUserCard';

type UserType = {
  firstName: string;
  lastName: string;
  id: string;
  email: string;
  occupation: string;
}

export default function TeamBanner() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:6950/team/get-users')
      .then((response) => {
        setTeam(response.data.data);
        console.log(team)
      })
  }, []);
  return (
    <div id="team"  className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
      <div  className="container xl:max-w-6xl mx-auto px-4">
        <div  className="flex flex-wrap flex-row -mx-4 justify-center">
          {team.map((member:UserType) => (
          <TeamUserCard
            key={member.id}
            variantImage={
              member.firstName === "Jessica" ? 3 : 1
            }
            name={member.firstName + ' ' + member.lastName}
            occupation={member.occupation}
            email={member.email}
          />
          ))}
        </div>
      </div>
    </div>
  )
}
