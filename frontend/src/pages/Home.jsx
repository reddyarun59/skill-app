import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserSkills, reset } from '../features/skill/skillSlice'

const Home = () => {

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
      dispatch(reset())
    }
  },[isError,message, dispatch])
  
  return (
    <div>Home</div>
  )
}

export default Home