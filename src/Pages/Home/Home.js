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
           
           <ContactForm></ContactForm>
           
           </div>

           
        </div>
    );
};

export default Home;