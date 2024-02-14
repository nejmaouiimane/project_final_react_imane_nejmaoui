import './homeSection.sass'
import { Link } from 'react-router-dom'
import { Carousel } from 'flowbite-react';


export const FirstSection = () => {
    return (
        <>
        <div className="h-[80vh] ">
                <Carousel slide={false}>
                    <div className=' relative '>
                        <div className='bg-no-repeat w-[100%] h-[100vh] bg-slide1'>
                            <p>Woman Collection</p>
                            <h1>NEW ARRIVALS</h1>
                            <button></button>
                        </div>                 
                        </div>

                    <div className=' bg-no-repeat w-[100%] h-[100vh] bg-slide2'>
                    </div>

                    <div className='bg-no-repeat w-[100%] h-[100vh] bg-slide3'>
                        
                    </div>



                </Carousel>
            </div>

        </>
    )
}



