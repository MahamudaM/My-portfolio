import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
const ContactForm = () => {
    const { register, handleSubmit,  formState: { errors }, } = useForm();
    const form = useRef();
    const onSubmit = data =>{
        console.log(data);
       
        emailjs.sendForm('service_zr7jm89', 'template_00ygys8', form.current, '7M5ZnwP-RaIpuazPx')
        .then(() => {
            alert("Message successfuly send")
            
        }, 
        () => {
            alert("faild to send message,pleace try again")
        });

        
    } 
// serveirce id service_zr7jm89
// vertyfy configarationm = 412Gmail_API: Request had insufficient authentication scopes.
    return (
        <div className='my-10 max-w-6xl'>
             <h1 className="mb-5 text-5xl font-bold text-center">Let’s start work together</h1>
           <form ref={form} onSubmit={handleSubmit(onSubmit)} className=" mx-auto m-16 card flex flex-col gap-4  w-full max-w-sm shadow-2xl bg-base-100 p-10 ">
     
           
      <input type="text" placeholder="name" className="input input-bordered w-full max-w-xs" {...register("name", { required: true })} />     
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="email" placeholder="email" className="input input-bordered w-full max-w-xs" {...register("email", { required: true })} />     
      {errors.exampleRequired && <span>This field is required</span>}
      
      
      <input type="text" placeholder="subject" className="input input-bordered w-full max-w-xs" {...register("subject", { required: true })} />   
      {errors.exampleRequired && <span>This field is required</span>}

      <textarea className="textarea textarea-bordered" placeholder="Message" {...register("message", { required: true })}></textarea>   
      {errors.exampleRequired && <span>This field is required</span>}
      
      
      <input className='btn ' type="submit" value='Send Message' />
    </form>
    <div className='font-bold flex gap-4 '>
            <a  href="https://www.linkedin.com/in/mahamuda-akter-440ba4259/">Linkedin</a>
            <a href="https://github.com/MahamudaM">GitHub</a>
           </div>
        </div>
    );
};

export default ContactForm;