

import './homeSection.sass'
import { Link } from 'react-router-dom'

export const FirstSection = () => {
    return (
        <>
            <h1>Hello Imane</h1>
            <Link className='text-black no-underline'to={'/about'}>About</Link>
        </>
    )
}



