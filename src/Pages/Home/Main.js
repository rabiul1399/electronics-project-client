import React, { useEffect, useState } from 'react';
import bg from '../../images/pic-1.jpg'
import Product from './Product';
import ballons from '../../images/balloons.png';
const Main = () => {
    const [products, setProducts]= useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <section>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-8 mt-3 px-8 py-14' style={{
                    backgroundImage: `url(${bg})`
                }}>                    
        
                   {
                        products.map(product=><Product  key={product._id} product={product}></Product>)
                    }  

                </div>
            </section>




            <section>
                <div>
                    <div className='grid grid-cols-2 gap-4 p-8 bg-base-300'>
                        <div className='' >
                            <img className='' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />

                        </div>
                        <div>
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                        </div>
                        <div>
                            <div  className='w-80 h-80 mx-auto bg-green-300  hover:transition hover:ease-in-out rounded-xl mt-3 hover:duration-700  duration-700  hover:scale-125 '>
                      
                            <img className='hover:bg-red-200 ' src={ballons} alt="" />
                              <h1 className=' hover:hidden'>Happy Birthday</h1>

                            </div>
                        </div>
                        <div>
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Main;