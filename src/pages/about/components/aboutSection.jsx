import './aboutSection.sass'
import { Link } from 'react-router-dom'
import titiza from "../../../assets/img/item-cart-01.jpg"

export const SecondSection = () => {
    return (
        <>
            <div className=' w-[100%] h-[40vh] bg-center  flex justify-center content-center bg-contact bg-cover'>
                <h1 className='text-white py-20 text-5xl'>ABOUT</h1>
            </div>
            <div className='flex lg:flex-row flex-col justify-center p-10'>
                <div className='overflow-hidden'>
                <img className='hover:scale-110 duration-300 lg:h-[70vh] lg:w-[30vw] h-[70vh] w-[90vw]'  src={titiza} alt="" />
                </div>
                <div className='lg:pl-10 lg:h-0 h-[120vh] p-4' >
                <h1 className='p-5 lg:text-3xl text-2xl '>Our STORY</h1>
                    <p className='lg:w-[52vw] w-[70vw] text-slate-500'>Phasellus egestas nisi nisi, lobortis ultricies risus semper nec. Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque porta est ac neque bibendum viverra. Vivamus lobortis magna ut interdum laoreet. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.</p>
                <div className=' h-[13vh] w-[52vw]  text-slate-500'>
                <p className='border-l-2  border-slate-500 p-5 lg:w-[49vw] w-[60vw]'>Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.</p>
                <p>- Steve Job’s</p>
                </div>
                </div>
            </div>
        </>
    )

}



