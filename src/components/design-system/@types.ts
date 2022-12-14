

export type UserProfileType = {
  firstName: string;
  lastName: string;
  id: string;
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
  role?: string;
  userProfile: UserProfileType
  posts: [];
  comments?: [];
}

export type UserStateType = {
  authenticated: boolean;
  isUserProfileCompleted: boolean;
  user : UserType
}

export type PostTypes ={
  title: string;
  author: any;
  userId: string;
  id?: string;
  content: any;
  createdAt?: string;
  richContent?: [];
  image?: string;
  tags: string[];
}
