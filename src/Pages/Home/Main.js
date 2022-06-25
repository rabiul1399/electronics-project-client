import React from 'react';
import bg from '../../images/pic-1.jpg'

const Main = () => {
    return (
        <div>
            <section>
                <div className='grid grid-cols-4 gap-x-8 mt-3  px-8  py-14' style={{
                    backgroundImage: `url(${bg})`
                }}>

                    <div class="card bg-base-100 shadow my-4 hover:shadow-2xl hover:transition hover:duration-700 hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-700  skew-y-6 hover:skew-y-0  ">
                        <figure class="">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl " />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title ">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 my-4 hover:shadow-2xl hover:transition hover:duration-700 hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-700 shadow  " >
                        <figure class="">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl scale-100" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title ">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div class="card bg-base-100 shadow my-4 hover:shadow-2xl hover:transition hover:duration-700 hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-700 skew-y-6 hover:skew-y-0">
                        <figure class="">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl " />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title ">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div class="card bg-base-100 my-4 hover:shadow-2xl hover:transition hover:duration-700 hover:ease-in-out hover:-translate-y-1 hover:scale-110 duration-700 shadow  " >
                        <figure class="">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl scale-100" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title ">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions">
                                <button class="btn btn-primary transition duration-700 ease-in-out hover:scale-110  
                                ">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>




            <section>
                <div>
                    <div className='grid grid-cols-2 gap-4 p-8 bg-base-300'>
                        <div >
                            <img className='' src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" />
                           
                            <img className='w-96 mt-3 hover:rotate-180'  src="https://i.ibb.co/KbTBt4Q/phone-screen-with-abstract-marble-aesthetic.jpg" alt="Shoes" />
                           
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