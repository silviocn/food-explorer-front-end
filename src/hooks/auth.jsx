import { createContext, useContext, useState, useEffect } from "react"
import { api } from "../services/api"
export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})
  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data
      localStorage.setItem("@explorerfood: user", JSON.stringify(user))
      localStorage.setItem("@explorerfood: token", token)
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Unable to login")
      }
    }
  }
  function signOut() {
    localStorage.removeItem("@explorerfood: token")
    localStorage.removeItem("@explorerfood: user")
    setData({})
  }
  
  useEffect(() => {
    const token = localStorage.getItem("@explorerfood: token")
    const user = localStorage.getItem("@explorerfood: user")
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth }