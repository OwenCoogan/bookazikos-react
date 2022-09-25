

export type UserProfileType = {
  firstName?: string;
  lastName?: string;
  avatar?: string;
  createdAt?: string;
  occupation? : string;
  description? : string;
}

export type UserType = {
  email: string;
  id: string;
  password?: string;
  token?: string;
  userProfile: UserProfileType

}

export type UserStateType = {
  authenticated: boolean;
  isUserProfileCompleted: boolean;
  user : UserType
}
