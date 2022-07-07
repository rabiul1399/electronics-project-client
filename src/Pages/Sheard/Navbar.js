import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
  const [user] = useAuthState(auth);
const  logout =() =>{
  signOut(auth)
}
  return (
    <div className="navbar bg-teal-300 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex="0" className="menu menu-compact bg-orange-300 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='my-auto mx-3 mb-2'><Link to='/home' className="btn  btn-sm btn-outline btn-primary uppercase text-dark content-center">Home</Link></li>
            <li className='my-auto mx-3 mb-2'><a className="btn  btn-sm btn-outline btn-primary uppercase text-dark content-center">Features</a></li>
            <li className='my-auto mx-3 mb-2'><a className="btn btn-sm btn-outline btn-primary uppercase content-center">Support</a></li>
            <li className='my-auto mx-3 mb-2'><a className='btn btn-sm btn btn-primary rounded-full text-white border-0 my-auto content-center uppercasae'>Dashboard</a></li>
           {
            user ? 
            <li onClick={logout} className='my-auto mx-3 mb-2'><Link to='/login' className='btn btn-sm btn-primary  rounded-full text-white border-0 my-auto content-center my-auto  uppercasae'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign Out</Link></li>
            :
           <li className='my-auto mx-3 mb-2'><Link to='/login' className='btn btn-sm btn-primary  rounded-full text-white border-0 my-auto content-center my-auto  uppercasae'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign In</Link></li>
           }
          </ul>
        </div>
        <Link to='/home' className="btn btn-ghost normal-case text-xl"><span className=''>X</span>Medisine</Link>
      </div>
      <div className="navbar-center">
        <div className="form-control relative">
          <div className="absolute mt-4 pr-2  pointer-events-auto ...">
            <svg className="absolute text-slate-400 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input type="text" placeholder="Search" className="input input-bordered placeholder-blue-500 " />
        </div>

      </div>
      <div className="navbar-end mr-8 hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className='my-auto mx-3'><Link to='/home' className="btn  btn-sm btn-outline btn-primary uppercase text-dark content-center">Home</Link></li>
          <li className='my-auto mr-3'><a className="btn  btn-sm btn-outline btn-primary uppercase text-dark content-center">Features</a></li>
          <li className='my-auto mr-3'><a className="btn btn-sm btn-outline btn-primary uppercase content-center">Support</a></li>
          <li><a className='btn btn-sm btn-primary rounded-full text-white border-0 my-auto content-center uppercasae mr-3'>Dashboard</a></li>

          {
            user ? 
            <li onClick={logout} className='my-auto mr-3 '><Link to='/login' className='btn btn-sm btn-primary  rounded-full text-white border-0 my-auto content-center my-auto  uppercasae'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign Out</Link></li>
            :
           <li className='my-auto mr-3'><Link to='/login' className='btn btn-sm btn-primary  rounded-full text-white border-0 my-auto content-center my-auto  uppercasae'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Sign In</Link></li>
           }
        </ul>

      </div>

    </div>
  );
};

export default Navbar;