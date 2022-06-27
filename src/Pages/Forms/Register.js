import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { Link } from "react-router-dom";

const Register = () => {
    const nameRef=useRef()
    const emailRef = useRef();
    const passwordRef =useRef();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if (error || error1) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (loading || updating) {
        return <p>Loading...</p>;
      }
      if (user) {
        console.log('user',user)
      }
    const handeleSubmitRegister =event =>{
        event.preventDefault();
        const name= nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;        
        createUserWithEmailAndPassword(email, password)
        updateProfile({ displayName: name })

        navigate('/home')
    }
    return (
        <div className='bg-base-200 py-24'>

            <div>
            </div>
            <div className="divider w-96 mx-auto">OR</div>

            <div className="flex justify-center items-center ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handeleSubmitRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input ref={nameRef} type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input ref={emailRef} type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  ref={passwordRef} type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        </form>
                        <h2 className='text-sm'>Already have on account! <Link className='underline text-blue-600' to="/login">Login</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;