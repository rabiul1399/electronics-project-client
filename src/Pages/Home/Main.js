import React, { useEffect, useState } from 'react';
import bg from '../../images/pic-1.jpg'
import Product from './Product';

const Main = () => {
    const [products, setProducts]= useState([]);

    useEffect( ()=>{
        fetch('products.json')
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
                        <div >
                            <img className='' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />

                            <img className='w-96 mt-3 hover:rotate-180' src="https://i.ibb.co/KbTBt4Q/phone-screen-with-abstract-marble-aesthetic.jpg" alt="Shoes" />

                        </div>
                        <div>
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
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