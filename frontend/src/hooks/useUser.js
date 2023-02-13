import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const useUser = () => {

   const [user, setUser] = useState(null);

   useEffect(() => {
       const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
           setUser(user);
       });
       return unsubscribe;
   }, []);

   return { user };
}

export default useUser;