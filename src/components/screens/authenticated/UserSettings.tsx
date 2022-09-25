import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {  userAtom } from '../../../store'
import UserProfile from './user-settings/UserProfile'

export default function UserSettings() {
  const userState = useRecoilState(userAtom)[0]
  const [userProfile, setUserProfile] = useState(userState)

  useEffect(() => {
    axios.get(`http://localhost:6950/auth/get-user/${userState.user.id}`)
    .then((response) => {
      setUserProfile(response.data.data)
    })
  }, [])

  return (
    <>
    </>
  )
}
