import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
      console.log(response.data.data)
    })
  }, [])

  return (
    <main className="profile-page">
    <section className="relative block mt-56">
      <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px">
        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
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
                <div className="py-6 px-3 mt-32 sm:mt-0">
                  <NavLink to="/edit-user" className="bg-primary-500 active:bg-primary-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                    Edit
                  </NavLink>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                  <SmallDataCard
                    value={userProfile?.posts?.length}
                    text="Posts"
                  />
                  <SmallDataCard
                    value={userProfile?.comments?.length}
                    text="Comments"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                {userProfile?.userProfile.firstName} {userProfile?.userProfile.lastName}
              </h3>
              <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                Los Angeles, California
              </div>
              <div className="mb-2 text-blueGray-600 mt-10">
                <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>{userProfile?.userProfile.occupation}
              </div>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    {userProfile?.userProfile.description}
                  </p>
                  <a href="#pablo" className="font-normal text-primary-500">Show more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        </div>
      </div>
    </div>
  </footer>
    </section>
  </main>
  )
}
