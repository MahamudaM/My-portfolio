import React from 'react';
import img from '../../../assets/img/banar.jpg'
const HomeSlider = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
  {/* <div className="hero-overlay bg-opacity-60"></div> */}
  <div className="hero-content text-center text-neutral-content">
    <div className="">
      <h1 className="mb-5 text-5xl font-bold">Hallo! I am Mahamuda,</h1>
<h1 className="mb-5 text-5xl font-bold">Web Developer based in Bangldesh</h1>

      {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeSlider;