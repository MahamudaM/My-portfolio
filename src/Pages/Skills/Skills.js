import React from 'react';

const Skills = () => {
    return (
        <div>
<h1 className='font-bold text-center text-5xl'>Skills</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2 my-10">
{/* frist */}
<div className="card w-46 bg-base-100 shadow-xl ">
  <div className="card-body items-center text-center">
   
    <div className="radial-progress text-[#f64072]" style={{"--value":95}}>95%</div> 
    <h2 className="card-title text-[#f64072]">HTML</h2>   
  </div>
  </div>
{/* second */}
<div className="card w-46 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
   
    <div className="radial-progress text-[#f64072]" style={{"--value":90}}>90%</div> 
    <h2 className="card-title text-[#f64072]">CSS</h2>   
  </div>
  </div>
  {/*  */}
  <div className="card w-46 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
   
    <div className="radial-progress text-[#f64072]" style={{"--value":80}}>80%</div> 
    <h2 className="card-title text-[#f64072]">Javascript</h2>   
  </div>
  </div>
  {/*  */}
  <div className="card w-46 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
   
    <div className="radial-progress text-[#f64072]" style={{"--value":85}}>85%</div> 
    <h2 className="card-title text-[#f64072]">React</h2>   
  </div>
  </div>
  {/*  */}
  <div className="card w-46 bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
   
    <div className="radial-progress text-[#f64072]" style={{"--value":50}}>50%</div> 
    <h2 className="card-title text-[#f64072]">MongoDB</h2>   
  </div>
  </div>
            </div>
        </div>
    );
};

export default Skills;