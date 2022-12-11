import React from 'react';

const ProjectCard = ({pro}) => {
const {img1,name,samury,technology,id} = pro
    console.log(pro)
    return (
        <div>
          <div className="card w-96  bg-base-100 shadow-xl">
  <figure><img src={img1}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{samury}</p>
    <div className="card-actions ">
      <p><span className='font-bold'>Technology</span> : {technology}</p>
      <a href={`/project/${id}`}><button className="btn btn-primary">Show Details</button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProjectCard;