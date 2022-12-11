import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
// import img1 from '../../../assets/img/proj1.PNG'
// import img2 from '../../../assets/img/proj2.PNG'
// import img3 from '../../../assets/img/proje3.PNG'
const Project = () => {
    const [projects,SetProjects]=useState()
    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            SetProjects(data)
        })
    },[])
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20 ">
            {
                projects?.map((pro,i)=><ProjectCard key={i} pro={pro}></ProjectCard>)
            }
        </div>
    );
};

export default Project;