import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {  
       const [project,setProject]=useState()
// const {name,img1,img2,img3,samury,technology,urlClient,urlLive,urlServer,fetucher} =project;
    const { id } = useParams();  
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/MahamudaM/My-portfolio/main/public/project.json')
    .then(res=>res.json())
    .then(data=>{
       console.log(data)
        const pro = data.find(d =>d.id === +id)
        setProject(pro)
        console.log(pro)
    })
    },[id])
    console.log(project)
    return (
        <div >
            
            <p className='text-5xl font-bold text-center my-8'>{project?.name} project details</p>
              {/* banar ,background-repeat: "no-repeat",background-size: "cover" */}
        <div className="hero min-h-screen " style={{ backgroundImage: `url(${project?.img1})` }}>
        </div>
        <div className='my-10 max-w-6xl mx-auto'>
        <div className=''>
            <div className="">
                <p>sumary : {project?.samury}</p>
            </div>
            {/* link */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 my-10">
                {/* 1st */}
          <a href={project?.urlLive} target="_blank" rel='noreferrer'>  <div className="card w-56 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Live link</h2>    
  </div>
</div></a>

<a href={project?.urlServer} target="_blank" rel='noreferrer'>  <div className="card w-56 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Server side code </h2>    
  </div>
</div></a>

<a href={project?.urlClient} target="_blank" rel='noreferrer'>  <div className="card w-56 bg-neutral text-neutral-content">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Client side code</h2>    
  </div>
</div></a>
            </div>
            {/* fetucher */}
           <p className='text-xl font-bold  my-4'>Fetucher and functionality</p>
            {
              project?.fetucher?.map((f,i)=><li key={i} f={f}>{f}</li>)  
            }
            {/* grllare */}
            <div className="gallare my-20">
               <p className='font-bold text-5xl text-center'>Gallarey</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-10'>
                <div className="card w-92 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={project?.img1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Home</h2>                
                    </div>
                  </div>

                  <div className="card w-92 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={project?.img2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Service</h2>                
                    </div>
                  </div>

                  <div className="card w-92 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                      <img src={project?.img3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title">Service Details</h2>                
                    </div>
                  </div>
                </div>
                   
                
  

            </div>
        </div> 
        </div>
                
                
            
        </div>
    );
};

export default ProjectDetails;