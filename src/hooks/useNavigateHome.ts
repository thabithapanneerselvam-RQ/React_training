import { useNavigate } from "react-router-dom";

function useRedirectHome(){
    const navigate = useNavigate();

    return()=>{
        navigate("/")
    }
}

export default useRedirectHome;