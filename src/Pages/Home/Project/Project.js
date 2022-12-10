import React from 'react';
import ProjectCard from './ProjectCard';
import img1 from '../../../assets/img/proj1.PNG'
import img2 from '../../../assets/img/proj2.PNG'
import img3 from '../../../assets/img/proje3.PNG'
const Project = () => {
    const project = [
        {
            name:"Clothe Resale Store",
            url:" https://react-mern-usedclothe.web.app/",
            img:img1,
            samury:"A full-stack website where you have the admin,saller and user dashboard.To place an order,users have to log in and add a product for salle ,saller need to log in.Users can buy clothe from this site through stripe payment.",
            technology:" React.js,Axios,Tailwind CSS,react Query form,daisyUI,Firebase Authentication,MongoDb"
            
        },
        {
            name:"Heart Care",
            url:"https://backend-database-a11.web.app/",
            img:img2,
            samury:"Anyone can see services section and click on the services card show details button it will take users the details page.Onliy login user can add a review in services details page but anyone can see all users review.",
            technology:" React,React router,Node.js,Express.js,Authentication with JWT and firebase,Tailwind css,daisyUI"
            
        },
        {
            name:"Clothe Resale Store",
            url:"https://react-auth-a10.web.app/",
            img:img3,
            samury:"User can download course PDF by clicking PDF icon.Onliy log in user get premium access in course.Added dark theme.Fully Responsive",
            technology:"React,React router,Node.js,Express.js"
            
        }
    ]
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 my-20 ">
            {
                project.map((pro,i)=><ProjectCard key={i} pro={pro}></ProjectCard>)
            }
        </div>
    );
};

export default Project;