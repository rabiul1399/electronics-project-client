import React from 'react';

const Login = () => {
    return (
        <div className='bg-base-200 py-24'>
        
<div>
    
</div>
          

            <div class="divider w-96 mx-auto">OR</div>
       
            <div class="flex justify-center items-center ">                   
                <div class="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" class="input input-bordered" />
                            <label class="label">
                                <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Login</button>
                        </div>
                        <h2 className='text-sm'>I have no account! <a className='underline text-blue-600' href="#">Register</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;