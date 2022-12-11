import React from 'react';
import img from '../../assets/img/aboutImg.avif'
const About = () => {
    return (
        <div className='my-10 max-w-6xl mx-auto'>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='img'/>
    <div>
    <h1 className="text-2xl font-bold">About me</h1>
      <h1 className="text-5xl font-bold">Hello, I am Mahamuda</h1>
      <p className="py-6"> I am complete  Web development course at Phrogramming Hero .I am looking for a job of a web developer, since that’s what I’ve been doing already for six monthe in my free time. Designing websites for friends, developing simple e-shops with the help of some open source content-management systems, and so on. Besides that I am a normal guy who enjoys hiking and spending time with friends, while not working or studying. If I should pick the best website I’ve designed up to this point, it will be this one: Used Clothe Resale. I am ambitious and hard-working  web developer.</p>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default About;