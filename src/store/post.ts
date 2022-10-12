import { atom } from 'recoil';

const postAtom = atom({
    key: 'post',
    default: {
        title: '',
        description: '',
        content: '',
        userId: '',
    }
});

const postListAtom = atom({
    key: 'postList',
    default: []
});

const draftListAtom = atom({
    key: 'draftList',
    default: []
});

export {
    postAtom,
    postListAtom,
    draftListAtom
};
