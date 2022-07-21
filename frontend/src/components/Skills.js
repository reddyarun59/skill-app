import React from 'react'

const Skills = ({skills, setSkills, formData, setFormData}) => {
  return (
    <div>
        {skills.map(skill =>(
            <div>
                <div>
                    <h2>{skill}</h2>
                    <div className="cursor-pointer">
                        <input type="checkbox" className="checkbox" />
                        <label>Mark this as Expert Skill</label>
                    </div>
                </div>
                <div>
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h1>Select Your Level</h1>
                    </div>
                    <div>
                        <div className="">
                            <input type="range" min="0" max="100" className="range range-accent w-56" />
                        </div>
                        <h2>Proficiency</h2>
                    </div>
                    <div>
                        <div>
                            <span>-</span><span><input/>years</span><span>+</span>
                        </div>
                        <h2>Years of Experience</h2>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Skills