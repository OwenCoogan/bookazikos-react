import axios from 'axios';
import { toast } from 'react-toastify';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { draftListAtom, postListAtom } from '../post';


function usePostActions () {
    const baseUrl = `http://localhost:6950/posts`;
    const [postList,setPostList] = useRecoilState(postListAtom);
    const [draftList,setDraftList] = useRecoilState(draftListAtom);


    return {
        getPosts,
        getDrafts
    }

    function getPosts() {
      axios.get(`${baseUrl}/get-posts`,{
        params: { status : 'published' }
      })
      .then((response) => {
        setPostList(response.data.data);
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
    function getDrafts() {
      axios.get(`${baseUrl}/get-drafts`)
      .then((response) => {
        setDraftList(response.data.data);
      }
      ).catch((error) => {
        toast.error(error.message);
      });
    }
}


export { usePostActions };
