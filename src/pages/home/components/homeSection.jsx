import './homeSection.sass'
import { Link } from 'react-router-dom'
import { Carousel } from 'flowbite-react';


export const FirstSection = () => {
    return (
        <>
        <div className="h-[80vh] ">
                <Carousel slide={false}>
                    <div className=' relative '>
                        <div className='bg-no-repeat w-[100%] h-[100vh] lg:bg-slide1 bg-slide1  text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <p className='text-xl'>Woman Collection 2018</p>
                            <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                            <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                        </div>                 
                        </div>

                        <div className='bg-no-repeat w-[100%] h-[100vh] bg-slide2 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <p className='text-xl'>Woman Collection 2018</p>
                            <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                            <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                        </div> 

                        <div className='bg-no-repeat w-[100%] h-[100vh] bg-slide3 text-white  flex justify-center align-middle items-center gap-y-5 flex-col '>
                            <p className='text-xl'>Woman Collection 2018</p>
                            <h1 className='font-bold text-4xl'>NEW ARRIVALS</h1>
                            <button className='bg-white py-3 rounded-2xl lg:w-[13vw] w-[50vw] text-black'> Shop Now</button>
                        </div> 

 

                </Carousel>
            </div>

        </>
    )
}



