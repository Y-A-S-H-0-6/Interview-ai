import { createContext, useState } from "react";
import { useEffect } from "react";
import { getUser } from "./services/auth.api";

export const Authcontext = createContext()

export const AuthProvider = ({ children }) => {
  
  const [user, setuser] = useState(null)
  const [loading, setloading] = useState(true)


useEffect(() => {
     const getAndSetUser = async () => {
      try {
      const data = await getUser()
      setuser(data.user)
      } catch (err) {}  finally {
        setloading(false)
      }
      
    }
          
    getAndSetUser()

  },[])

  return (
    <Authcontext.Provider value={{ user, setuser, loading, setloading }} >
      {children}
    </Authcontext.Provider>
  )
}

