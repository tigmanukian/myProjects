import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { urlPrefix } from "../Settings"


const VerifyEmail=()=>{
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    var token = searchParams.get("token")
    debugger;
     fetch(`${urlPrefix}/User/verifyEmail?token=${token}`)
      .then((response) =>{console.log(response); response.json()})
      .then((result) => {       
        localStorage.setItem("token", token)
        localStorage.setItem("status","")
        navigate("../dashboard", { replace: true });
        // TODO: route to another url
      })
      .catch((error) => {

        console.error('Error:', error);
        // responseData = {};
      });

    return (
<>
   
</>
    )};

export default VerifyEmail;