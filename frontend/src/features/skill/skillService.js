import axios from "axios";

const fetchUserSkills=async()=>{

    const {data}=await axios.get("/api/v1/getskills")

    return await data
}

const skillService={
    fetchUserSkills
}

export default skillService