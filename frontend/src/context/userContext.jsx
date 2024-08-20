import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext({});

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    getUser()
  }, [])

  const getUser = async() =>{
    try{
        const res = await axios.get(URL + "/api/auth/refetch" , {withCredentials : true})
        setUser(res.data)
    }catch (err){
        console.log(err);
        
    }
  }

  return (<UserContext.Provider value = {{user, setUser}}>
    {children}
  </UserContext.Provider>);
}

export default UserContextProvider;
