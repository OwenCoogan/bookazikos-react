import {atom, selector} from 'recoil';
import type {UserStateType} from '../components/design-system/@types';


const userAtom = atom<UserStateType>({
    key: 'user',
    default: {
        authenticated: false,
        isUserProfileCompleted: false,
        user: {
          email: '',
          id: '',
          token: '',
          userProfile: {
            firstName: '',
            lastName: '',
            avatar: '',
            id: '',
            occupation: '',
            description: '',
          },
          posts: [],
        }
    },
});


export const getUserInfo = selector({
    key: 'getUser',
    get: ({ get }) => {
      const currentUser = get(userAtom);

      return currentUser;
    },
  });

export {
    userAtom
};
