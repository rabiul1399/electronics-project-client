import React from 'react';
import image from '../../images/pic-1.jpg'




const Motion = () => {

    return (
        <div className="m-8  py-14 " style={{ backgroundImage: `url(${image})`}} >

            <div className=' hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-80 h-80  mx-auto bg-green-300  hover:transition opacity-50 hover:ease-in-out rounded-xl mt-3 hover:duration-700  duration-700  hover:scale-125 '>


                <h1 className=' hover:hidden'>Happy Birthday</h1>

            </div>
        </div>
    )
};

export default Motion;