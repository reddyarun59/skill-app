import React, { useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/auth/authSlice'
import { fetchUserSkills, skillReset } from '../features/skill/skillSlice'
//import {reset} from '../features/auth/authSlice'

const Home = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {user}=useSelector((state)=>state.auth)
  const {skills, isLoading, isError, isSuccess, message} = useSelector((state)=>state.skills)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    if(isError) {
      console.log(message)
    }
    dispatch(fetchUserSkills())
    setLoading(false)
    return ()=>{
      dispatch(skillReset())
    }
  },[isError,message, dispatch])

  // async function handleClick(){
  //   dispatch(logout())
  //   navigate("/login")
  // }

  // useEffect(()=>{
  //   handleClick()
  // }, [navigate, dispatch])
  
  return (
    <div>
      <h1>Hello {user&&user.user.name}</h1>
      {user&&<button>Logout</button>}  
      {loading?(
        <div>Loading...</div>
      ):(
        <div>
          <h1>My Skills</h1>
          <div>
            {skills.skills?.map((skill)=>(
              <div key={skill._id} className="flex justify-around">
                <div>
                  {skill.skill}
                </div>
                <div>
                  {/* <span>{skill.expert}years</span> */}
                  <span>{skill.experience}years experience </span>
                  <span>{skill.level}level with </span>
                  <span>{skill.proficiency}% proficiency</span>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <Link to="/addnewskills">
          <button>Add Skills</button>
        </Link>
      </div>
    </div>
  )
}

export default Home