import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const register=async(userData)=>{
    const config={
        header:{
            "Content-Type": 'application/json'
        }
    }

    const {data}=await axios.post("/api/v1/signup", userData, config)

    if(data){
        localStorage.setItem("user", JSON.stringify(data))
    }

    return data
}

const login=async(userData)=>{
    const config={
        header:{
            "Content-Type": 'application/json'
        }
    }

    const {data}=await axios.post("/api/v1/signin", userData, config)

    if(data){
        localStorage.setItem("user", JSON.stringify(data))
    }

    return data
}

const logout=async()=>{
    const config={
        header:{
            "Content-Type": 'application/json'
        }
    }
    const {data}=await axios.get("/api/v1/logout", config)
    if(data){
        localStorage.removeItem("user")
    }
    return data
}


const authService = {
    register,
    login,
    logout,
}

export default authService