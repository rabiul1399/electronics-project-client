import React from 'react';

const Contact = () => {
    return (
        <div className='m-8 '>
            <div className=" p-8 bg-base-200">
  <div className="flex justify-evenly flex-col lg:flex-row-reverse">
    <div className=" ">
      <h3 className='2xl'>Contact</h3>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter Your Subject</span>
          </label>
          <input type="text" placeholder="Subject" className="input input-bordered" />
       
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
        </div>
       
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;