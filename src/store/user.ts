import { atom, selector } from 'recoil';

const userAtom = atom({
    key: 'user',
    default: {
        authenticated: false,
        isUserProfileCompleted: false,
        token: '',
        userProfile: {
          id: '',
          email: '',
          userProfile: {
            firstName: '',
            lastName: '',
          },
        },
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
