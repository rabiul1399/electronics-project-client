import React, { useState } from 'react';

const Product = ({ product }) => {
    const {_id, name, img, description, price, stock } = product;
  
    const [value,setValue] = useState(0)
    let a = 0;
    let b= 0;
    
    const plus = () =>{
        a= value+1
        setValue(a)
    }
    const mainus = () =>{
        b = value-1
        setValue(b)
    }

    const handaleBuyNow = () =>{
        console.log(_id,name,price,value)
    }

    return (
        <div>
            <div className="card bg-base-100 shadow my-4 hover:shadow-2xl hover:transition hover:duration-700 hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-700  skew-y-6 hover:skew-y-0  ">
                <figure className="">
                    <img src={img} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body hover:bg-red-300  items-center text-center">
                    <h2 className="card-title ">{name}</h2>
                    <p>Description:{description}</p>
                    <p>Price: {price}</p>
                    <p>Stock: {stock}</p>
                    <div className=''>
                        <div>Order: 
                            <div className='bg-base-200 w-36 rounded-lg pb-1   font-semibold  '>
                            <span  onClick={mainus} className='mr-6 text-3xl cursor-pointer'><button className='btn btn-sm'>-</button></span>                         
                            <span  className='pb-2' >{value}</span>
                            <span onClick={plus} className='ml-6 text-3xl cursor-pointer'>
                                <button className='btn btn-sm'>+</button></span>
                        </div>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={handaleBuyNow}  className="btn btn-primary hover:btn-success transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;