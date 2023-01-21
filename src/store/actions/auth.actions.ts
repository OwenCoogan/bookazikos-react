import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type AdminInvitationValidationType = {
    email: string;
    token: string;
}

function useAuthActions () {
    const baseUrl = `http://localhost:6950/auth`;
    const navigate = useNavigate();
    async function validateAdminInvitation({email,token}: AdminInvitationValidationType){
      console.log("validateAdminInvitation" + email + " " + token)
      await axios.post(`${baseUrl}/validate-admin-invitation`,{
        email,
        token
      })
      .then((response) => {
        if(response.data.invitationId){
          toast.success("Invitation validated");
        }
        else{
          toast.error("Invitation invalid");
          console.log(token)
        }
      })
    }
    return {
      validateAdminInvitation,
    }
}


export { useAuthActions };
