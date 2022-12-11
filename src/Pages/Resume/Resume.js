import React from 'react';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Resume = () => {
    return (
        <div className='my-10 max-w-6xl mx-auto'>

      <div className='mx-auto'>
{/* pdf part */}
<Pdf  targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='mb-2 text-2xl font-bold ' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
 
 <div ref={ref} className='mx-auto main card w-full max-w-screen-md shadow-2xl bg-base-100 p-5'> 

            <div className="head mx-auto">
                <h1 className='mb-2 text-2xl font-bold text-center'> Mahamuda Akter</h1>
                <h3 className='mb-2 text-xl font-bold text-center'>React developer</h3>
                <div className='flex flex-row gap-3 '>
                    <p>mahamuda3052@gmail.com</p>
                    <p>01625191945</p>
                    <p>Gazipur,Bangladesh</p>                    
                </div>
               <div className="social flex flex-row gap-3 justify-center">
               <a className='text-indigo-500' href="https://github.com/MahamudaM">GitHub</a>
                <a className='text-indigo-500' href="https://www.linkedin.com/in/mahamuda-akter-440ba4259/">Linkedin</a>
               </div>
            </div>
            <div className="skil">
                <h1 className='mb-2 text-lg font-bold border-b-2 border-black'>Skill</h1> 
                <p className=" ">HTML, CSS, Bootstrap, Tailwind, Javascript, ES6, JSX, React.js, Firebase, Git,
Node.js, npm, Express.js, MongoDB</p>
            </div>
            {/* project */}
            <div className="project">
                <h1 className='mb-2 text-lg font-bold border-b-2 border-black'>PROJECTS</h1>
                {/* 1st project */}
                <div className='single-project'>
                <h1 className='mb-2 text-md font-bold '>Clothe Resale Store - (Sale and buy second-hand clothe)</h1>    
                <a className='text-indigo-500' href="https://react-mern-usedclothe.web.app/">Live link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Clothe-resale-client">client link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Clothe-resale-server">Server link </a>
                <p>• A full-stack website where you have the admin,saller and user dashboard.</p>
                <p>•To place an order,users have to log in and add a product for salle ,saller need to log in.</p>
                <p>•Users can buy clothe from this site through stripe payment</p>
                <p>•support CURD operation.</p>
                <p><span className='mb-2 text-md font-bold '>Technology :</span> React.js,Axios,Tailwind CSS,react Query form,daisyUI,Firebase
Authentication,MongoDb</p>
                </div>
                {/* 2nd project */}
                <div className='single-project'>
                <h1 className='mb-2 text-md font-bold '>Heart Care - (A full-stack responsive projectfor Heart Doctor)</h1>    
                <a className='text-indigo-500' href="https://backend-database-a11.web.app/">Live link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Heart-specialist-client">client link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Heart-specialist-server">Server link </a>    
                <p>•Anyone can see services section and click on the services card show details button it will
take users the details page.</p>
<p>•Onliy login user can add a review in services details page but anyone can see all users
review.</p>
<p>•Fully Responsive</p>
<p><span className='mb-2 text-md font-bold '>Technology :</span> React,React router,Node.js,Express.js,Authentication with JWT and
firebase,Tailwind css,daisyUI</p>
                </div> 
                 {/*3rd project  */}
                 <div className='single-project'>
                <h1 className='mb-2 text-md font-bold '>Learning Programming - (Various programming languages learning platform)</h1>    
                <a className='text-indigo-500' href="https://react-auth-a10.web.app/">Live link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Lerning-Programming-Project">client link</a> | | <a className='text-indigo-500' href="https://github.com/MahamudaM/Lerning-programming-projet-server">Server link </a>    
                <p>•User can download course PDF by clicking PDF icon</p>
<p>•Onliy log in user get premium access in course.</p>
<p>•Added dark theme.</p>
<p><span className='mb-2 text-md font-bold '>Technology :</span> React,React router,Node.js,Express.js</p>
                </div> 
            </div>
            
       {/* courses */}
       <div className="COURSES">
                <h1 className='mb-2 text-lg font-bold border-b-2 border-black'>COURSES</h1> 
                <p  className='mb-2 text-md font-bold '>Complete web development course at Programming Hero</p>
            </div>
            {/* language */}
            <div className="LANGUAGES">
                <h1 className='mb-2 text-lg font-bold border-b-2 border-black'>LANGUAGES</h1> 
                <span className='text-base'>Bangla | </span> <span>English</span>
            </div>
        </div>
        </div>
       

        
    );
};

export default Resume;