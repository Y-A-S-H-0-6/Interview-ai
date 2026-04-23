import { useContext } from "react";
import { Authcontext } from "../auth.context";
import {login ,register, logout, getUser} from "../services/auth.api"

export const useAuth = () => {
  const context = useContext(Authcontext)
  const { user, setuser, loading, setloading } = context

  const handleLogin = async ({ email, password }) => {

    setloading(true)
    try {
       const data = await login({ email, password })   
      setuser(data.user)
       setloading(false)
    }
    catch (err) {
      setuser(null)
    throw err  // 👈 throw error so login page catches it


    }
    finally {
      setloading(false)
    }
  }

  const handleRegister = async ({ username, email, password }) => {
  
    setloading(true)
    try {
      const data = await register({ username, email, password })
      setuser(data.user)
       setloading(false)
    } catch (err) {
      setuser(null)
      throw err

    } finally {

      setloading(false)
    }
  }

  const handleLogout = async () => {
    setloading(true)
    try {
      const data = await logout()
      setuser(null)
    } catch (err) {

    } finally {
      setloading(false)
    }
  }

   

  return{ user, loading, handleLogin, handleRegister, handleLogout}

}

