import axios from 'axios';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { postListAtom } from '../post';


function usePostActions () {
    const baseUrl = `http://localhost:6950/posts`;
    const [postList,setPostList] = useRecoilState(postListAtom);


    return {
        getPosts
    }

    function getPosts() {
      axios.get(`${baseUrl}/get-posts`)
      .then((response) => {
        setPostList(response.data.data);
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
}


export { usePostActions };
