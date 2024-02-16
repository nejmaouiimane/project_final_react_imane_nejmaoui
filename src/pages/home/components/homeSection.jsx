import './homeSection.sass'
import { Link } from 'react-router-dom'
import { Carousel } from 'flowbite-react';
import item1 from '../../../assets/img/item-15.jpg'
import item2 from '../../../assets/img/item-13.jpg'
import item3 from '../../../assets/img/item-04.jpg'
import item4 from '../../../assets/img/item-11.jpg'
import blog1 from '../../../assets/img/blog-01.jpg'
import blog2 from '../../../assets/img/blog-09.jpg'
import blog3 from '../../../assets/img/blog-10.jpg'



export const FirstSection = () => {
    return (
        <>
        {/* carousel */}
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
            {/* second */}

            <div className='flex lg:flex-row  flex-col p-8'>
                <div className='flex flex-col gap-9 px-8 overflow-hidden '>
                    <div className=' lg:w-[26vw] w-[80vw] h-[70vh] bg-cover bg-dresses hover:scale-110 duration-300 relative'>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw] flex absolute justify-center items-center translate-x-28 bottom-4 center'>DRESSES</button>
                    </div>
                    <div className='bg-sunglasses lg:w-[26vw] w-[80vw] bg-cover h-[45vh]  hover:scale-110 duration-300 relative'>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw] flex absolute justify-center items-center translate-x-28 bottom-4 center'>SUNGLASSE</button>
                    </div>
                </div>
                <div className='flex flex-col gap-9 px-8  overflow-hidden'>
                    <div className='lg:w-[26vw] w-[80vw] h-[45vh] bg-cover bg-watch hover:scale-110 duration-300 relative'>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw]  flex absolute justify-center items-center translate-x-28 bottom-4 center'>WATCH</button>
                    </div>
                    <div className='lg:w-[26vw] w-[80vw] bg-footwear  bg-cover h-[70vh]  hover:scale-110 duration-300 relative'>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw]  flex absolute justify-center items-center translate-x-28 bottom-4 center'>FOOTWEAR</button>
                    </div>
                </div>
                <div className='flex flex-col gap-9 px-8  overflow-hidden'>
                    <div className='lg:w-[26vw] w-[80vw] h-[70vh] bg-cover bg-bag  hover:scale-110 duration-300 relative'>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw]  flex absolute justify-center items-center translate-x-28 bottom-4 center'>BAG</button>
                    </div>
                    <div className='lg:w-[26vw] w-[80vw]  bg-cover h-[45vh] bg-accessoire  hover:scale-110 duration-300 relative '>
                        <button className=' bg-white h-[7vh] lg:w-[10vw] w-[40vw]  flex absolute justify-center items-center translate-x-28 bottom-4 center'>ACCESSOIRE</button>
                    </div>
                </div>
            </div>
            {/* third */}
            <h1 className='text-center p-8'>FEATURED PRODUCTS</h1>
            <div className='flex lg:flex-row flex-col justify-center gap-8 p-8'>
                <div>
                    <img className='lg:w-[18vw] w-[90vw]' src={item1} alt="" />
                    <p>Boxy7 T-Shirt with Roll Sleeve</p>
                    <p>$ 20.00</p>
                </div>
                <div>
                    <img className='lg:w-[18vw] w-[90vw]' src={item2} alt="" />
                    <p>Boxy7 T-Shirt with Roll Sleeve</p>
                    <p>$ 20.00</p>
                </div>
                <div>
                    <img className='lg:w-[18vw] w-[90vw]' src={item3} alt="" />
                    <p>Boxy7 T-Shirt with Roll Sleeve</p>
                    <p>$ 20.00</p>
                </div>
                <div>
                    <img className='lg:w-[18vw] w-[90vw]' src={item4} alt="" />
                    <p>Boxy7 T-Shirt with Roll Sleeve</p>
                    <p>$ 20.00</p>
                </div>
            </div>
            {/* fourth section */}
            <div className='w-[100%] lg:h-[70vh] h-[100vh] lg:py-0 py-8 flex lg:flex-row flex-col items-center  justify-center bg-slate-200'>
                <div className='bg-pic4 bg-cover bg-center text-white lg:h-[50vh] lg:w-[35vw] w-[90vw] h-[80vh] flex flex-col align-middle justify-center items-center '>
                    <h4 className='text-2xl font-bold'>The Beauty </h4>
                    <h1 className='text-4xl font-bold'>LOOKBOOK</h1>
                    <p>view collection</p>
                </div>
                {/*  */}
                <div className=' lg:h-[50vh] lg:w-[35vw] h-[40vh]  flex flex-col align-middle items-center justify-center bg-white'>
                    <div className='bg-pic5 bg-cover lg:w-[30vw] lg:h-[30vh] w-[90vw] h-[70vh]'></div>
                    <h4 className='text-center'>Boxy2 T-shirt with Roll Sleeve </h4>
                    <p className='text-center'>$20.00</p>
                    <div className='flex flex-row  justify-center gap-3'>
                        <div className='border-2 border-slate-400 lg:w-[4vw] w-[10vw]'>
                            <p className='w-[3vw] text-center '>-1873 days</p>
                        </div>
                        <div className='border-2 border-slate-400 lg:w-[4vw] w-[10vw] '>
                            <p className='w-[3vw] text-center'>-10 hrs</p>
                        </div>
                        <div className='border-2 border-slate-400 lg:w-[4vw] w-[10vw] '>
                            <p className='w-[3vw] text-center'>-55 mins</p>
                        </div>
                        <div className='border-2 border-slate-400 lg:w-[4vw] w-[10vw] '>
                            <p className='w-[3vw] text-center'>-31 secss</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* dsection5 */}
            <h1 className='p-8 font-bold text-2xl text-center'>OUR BLOG</h1>
            <div className='flex lg:flex-row flex-col justify-evenly lg:px-28 px-5 gap-6'>
                <div className='lg:w-[30vw] w-[90vw]' >
                    <img src={blog1} alt="" />
                    <h1>Black Friday Guide: Best Sales & Discount Codes</h1>
                    <p className='text-slate-500'>by fashe-theme Admin on Dec 28,2017</p>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>
                <div className='lg:w-[30vw] w-[90vw]'>
                    <img src={blog2} alt="" />
                    <h1>The White Sneakers Nearly Every Fashion Girls Own</h1>
                    <p className='text-slate-500'>by fashe-theme Admin on Dec 29,2017</p>
                    <p className='text-slate-400'>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et...</p>
                </div>
                <div className='lg:w-[30vw] w-[90vw]'>
                    <img src={blog3} alt="" />
                    <h1>New York SS 2018 Street Style: By Annina Mislin</h1>
                    <p className='text-slate-500'>by fashe-theme Admin on Dec 28,2017</p>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                </div>
            </div>
            {/* section6 */}
            <h1 className='lg:p-8 py-10 text-center font-bold text-2xl'> @ FOLLOW US ON INSTAGRAM </h1>
            <div className='flex lg:flex-row flex-col w-[100%] justify-evenly py-32 lg:gap-0 gap-8'>
                <div className='lg:text-start text-center '>
                    <h1 >Free Delivery Worldwide</h1>
                    <p className='text-slate-400'>Mirum est notare quam littera gothica</p>
                </div>
                <div className='lg:text-start text-center  px-28 border-r-2 border-l-2'>
                    <h1>30 Days Return</h1>
                    <p className='text-slate-400'>Simply return it within 30 days for an exchange.</p>
                </div>
                <div className='lg:text-start text-center '>
                    <h1>Store Opening</h1>
                    <p className='text-slate-400'>Shop open from Monday to Sunday</p>
                </div>
            </div>
        </>
    )
}



