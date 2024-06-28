import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'

const useLogout = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const logout = async () => {
        setLoading(true)
        try{
            const res = fetch('/api/auth/logout',{
                method: "Post",
                headers: {"Content-Type" : "application/json"},
            })
            const data = (await res).json()
            if(data.error){
                throw new Error(data.error)
            }
            setAuthUser(null)
            localStorage.removeItem('auth-user')
        }
        catch(error){
            toast(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}

export default useLogout
