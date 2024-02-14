import React from 'react';
import { Link } from 'react-router-dom'
import contact from "../../../assets/img/heading-pages-06.jpg"


export const ContactSection = () => {
    return (
        <>
            <div className=' w-[100%] h-[40vh] bg-center  flex justify-center content-center bg-contact bg-cover'>
                <h1 className='text-white py-20 text-5xl'>CONTACT</h1>
            </div>
            <div className='flex py-16 px-2 justify-center  gap-10 lg:flex-row flex-col'>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0582663024916!2d-7.53642662522176!3d33.60379264127822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1707918591520!5m2!1sen!2sma" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                <div>
                    <form className='flex flex-col w-[20vw] gap-3' action="">
                        <h1>Send us your message</h1>
                        <input className=' border-slate-200 w-[30vw]' placeholder=' Name' type="text" /> 
                        <input className='border-slate-200 w-[30vw]'placeholder=' Email' type="text" />
                        <input className='border-slate-200 w-[30vw]'placeholder=' Phone' type="number" />
                        <textarea className='border-slate-200 w-[30vw]'placeholder=' Message' name=" " id="" cols="30" rows="10"></textarea>
                        <button className='text-white bg-black w-[10vw] rounded-3xl px-3 py-2'>SEND</button>
                    </form>
                </div>
            </div>

        </>
    );
};

