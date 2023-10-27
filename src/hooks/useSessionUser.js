import { useState, useEffect } from "react";
const useSessionUser = () => {
const [user, setUser] = useState(null)
    useEffect(() => {
      const userFromStorage = JSON.parse(sessionStorage.getItem('user'))
      if (userFromStorage) {
        setUser(userFromStorage)
      }
    }, [])
    return user
}

export default useSessionUser