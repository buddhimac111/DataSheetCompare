import NavBar from "../components/NavBar";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail} from "firebase/auth";

import {useNavigate,} from "react-router-dom";

const Options= () => {
    const [email, setEmail] = useState('')
    const auth = getAuth();
    const navigate = useNavigate();

  const triggerResetEmail = async () => {
    try{
        await sendPasswordResetEmail(auth, email);
        window.alert('Please Check Your Email For Password Reset Link ! (Check Spam Folder)');
        navigate('/');

      
    }
    
    catch(error){
        console.log(error.message);
        window.alert('Invalid Email !, Please enter your Current email');
    }
  }
 
  return (
    <>
    <NavBar />
    <div className="ms-5 mt-5 w-25">
      <h3>Change Password</h3> 
      <input className="form-control" placeholder="Email Your Current email" type="email" value={email} onChange={e => setEmail(e.target.value)} required  /> 
      <button className="btn btn-danger mt-3" type="button" onClick={triggerResetEmail}>Reset password</button>
    </div>
    <hr />
    </>
  )
}
export default Options;