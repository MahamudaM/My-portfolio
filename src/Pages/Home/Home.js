import React from 'react';
import ContactForm from './ContactForm';
import HomeSlider from './HomeSlider/HomeSlider';
import Project from './Project/Project';

const Home = () => {
    

    return (
        <div >
          
           <div>
            <HomeSlider></HomeSlider>
           </div>
           {/* project */}
<div className='my-10'>
<h1 className="mb-3 text-5xl font-bold text-center">My Project</h1>
<Project></Project>
</div>
           {/* contact */}
           <div className='my-10 max-w-6xl mx-auto'>           
            <h1 className="mb-5 text-5xl font-bold text-center">Let’s start work together</h1>
           <ContactForm></ContactForm>
           <div className='font-bold flex gap-4  mx-auto'>
            <a href="https://www.linkedin.com/in/mahamuda-akter-440ba4259/">Linkedin</a>
            <a href="https://github.com/MahamudaM">GitHub</a>
           </div>
           </div>

           
        </div>
    );
};

export default Home;