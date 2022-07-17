import axios from 'axios'

const register=async(userData)=>{
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

const authService = {
    register,
    login
}

export default authService