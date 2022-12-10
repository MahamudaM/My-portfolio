import React from 'react';

const ProjectCard = ({pro}) => {
const {img,name,samury,technology,url} = pro
    console.log(pro)
    return (
        <div>
          <div className="card w-96  bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{samury}</p>
    <div className="card-actions ">
      <p><span className='font-bold'>Technology</span> : {technology}</p>
      <a href={url}><button className="btn btn-primary">Live Preview</button></a>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProjectCard;