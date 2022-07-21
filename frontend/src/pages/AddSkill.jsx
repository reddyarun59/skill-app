import React, { useRef, useState } from 'react'
import Skills from '../components/Skills'

const AddSkill = () => {

    const [formData, setFormData]=useState({
        skill:""
    })
    const [skills,setSkills]=useState([])
    const ref=useRef()


    const {skill}=formData
    const handleChange=(e)=>{
        setFormData(prevState=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const handleAdd=(e)=>{
        e.preventDefault()
        setSkills(prevState=>[...prevState, skill])
        setFormData({
            skill:""
        })
        console.log(skills)
    }
  return (
    <div>
        <div className="mb-12 ml-4">
            <span>Go Back</span>
            <span>My Skills</span>
        </div>
            <div className="mb-4 ml-4">
                <h2>Add new skills you possess</h2>
                <h3>Assess yourself in the skills you have selected</h3>
            </div>
            <div className="form-control">
                <div className="input-group mx-12">
                    <input type="text" placeholder="Search…" className="input input-bordered"  id="skill" value={skill} name="skill" onChange={handleChange}/>
                    <button className="btn btn-square w-12" onClick={handleAdd}>
                        <h4>Add</h4>
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <Skills skills={skills} setSkills={setSkills} formData={formData} setFormData={setFormData}/>
                {/* {skills.map((skill)=><h1>{skill}</h1>)} */}
            </div>
    </div>
  )
}

export default AddSkill