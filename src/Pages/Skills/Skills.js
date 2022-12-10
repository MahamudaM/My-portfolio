import React from 'react';

const Skills = () => {
    return (
        <div>
<h1>Skills</h1>
            <div>
{/* frist */}
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">fontend Developer</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
{/* second */}
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Backend Developer</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Skills;