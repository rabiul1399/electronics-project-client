import React from 'react';

const Product = ({ product }) => {
    const { name, img, description, price, stock } = product;
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
                    <div>
                        <p>Order: 
                            <div className=' wrapper'>
                            <span>-</span>
                            <span>01</span>
                            <span>+</span>
                        </div>
                        </p>

                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary hover:btn-success transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;