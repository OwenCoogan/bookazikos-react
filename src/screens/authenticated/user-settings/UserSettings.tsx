import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import {  userAtom } from '../../../store'
import { UserType } from '../../../components/design-system/@types'
import SmallDataCard from '../../../components/design-system/cards/small-data-card/SmallDataCard'
import Tag from '../../../components/design-system/tag/Tag'

export default function UserSettings() {
  const userId = useRecoilState(userAtom)[0].user.id
  const [userProfile, setUserProfile] = useState<UserType>()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:6950/auth/get-user/${userId}`)
    .then((response) => {
      setUserProfile(response.data.data)
      console.log(userProfile)
    })
  }, [])

  return (
    <div className='mt-200'>
    <section className="relative py-16 bg-yellowGray-200 mt-96">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <Tag
                tagTitle={userProfile?.role}
                tagColor='tertiary'
              />
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <Link to="/edit-user" className="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                  Edit Profile
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <SmallDataCard
                  value={userProfile?.posts.length}
                  text="Posts"
                />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal text-yellowGray-700 mb-2">
              {userProfile?.userProfile.firstName} {userProfile?.userProfile.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-yellowGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-yellowGray-400"></i>
              {userProfile?.email}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-yellowGray-200 text-center">
          <button
                  className="bg-yellow-500 active:bg-yellow-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  onClick={() =>setIsOpen(!isOpen)}
                >
                  Show more
                </button>
            <div className={`flex flex-wrap justify-center ${isOpen ===false && "hidden"}`}>
              <div className="w-full lg:w-9/12 px-4">
                <div >
                  <p className="mb-4 text-lg leading-relaxed text-yellowGray-700">
                    {userProfile?.userProfile.description}
                  </p>
                  <div className="mb-2 text-yellowGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-yellowGray-400"></i>{userProfile?.userProfile.occupation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
