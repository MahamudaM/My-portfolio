import React, { useEffect } from 'react';
// import {  useParams } from 'react-router-dom';

const ProjectDetails = () => {

    useEffect(()=>{
        fetch('project.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            
        })
    },[])
   
    // const {project,setProject}=useState()
    // const { id } = useParams();
    // useEffect(()=>{
    //     fetch('project.json')
    // .then(res=>res.json())
    // .then(data=>{
    //    console.log(data)
    //     const pro = data.find(d => d.id === id)
    //     setProject(data)
    //     console.log(pro)
    // })
    // },[])
    // console.log(project)
    return (
        <div>
            <p>project details</p>
        </div>
    );
};

export default ProjectDetails;