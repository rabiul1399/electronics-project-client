import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faLocation, faLocationDot, faMessage, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Contact = () => {
  return (
    <div className='mt-8 '>
      <div className=" p-8 bg-base-300">
      <h3 className='text-2xl text-center font-semibold mb-8'>Contact us</h3>
        <div className=" flex flex-col md:flex-row ">          
          <div className=" mx-auto pt-4 my-8">
            <p className='text-xl '><FontAwesomeIcon className='mr-8' icon={faLocationDot}></FontAwesomeIcon>Rajshahi,Bangladesh</p>
            <p className='mt-4 text-xl'> <FontAwesomeIcon className='mr-8' icon={faPhone}></FontAwesomeIcon>01795-718198</p>
            <p className='mt-4 '><FontAwesomeIcon className='mr-8' icon={faEnvelope}></FontAwesomeIcon> www.rabiulislam3808@gmail.com</p>
          </div>
          <div className="mx-auto">
            <div className="w-80">
              <div className="form-control my-3">
              
                <input type="text" placeholder="email" className="input" />
              </div>
              <div className="form-control mb-3">               
                <input type="text" placeholder="Subject" className="input " />
              </div>
              <div className="form-control mb-3">               
                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="btn">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;