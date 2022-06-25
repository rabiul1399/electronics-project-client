import React from 'react';

const Contact = () => {
    return (
        <div className='m-8 '>
            <div class=" p-8 bg-base-200">
  <div class="flex justify-evenly flex-col lg:flex-row-reverse">
    <div class=" ">
      <h3 className='2xl'>Contact</h3>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Enter Your Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Enter Your Subject</span>
          </label>
          <input type="text" placeholder="Subject" class="input input-bordered" />
       
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Message</span>
          </label>
          <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
        </div>
       
        <div class="form-control mt-6">
          <button class="btn btn-primary">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;