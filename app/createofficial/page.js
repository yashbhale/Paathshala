'use client'
import React, { useState } from 'react';
import { officials_data } from '../server/actions';

const SignUp = () => {
  const [passwordType, setPasswordType] = useState('password');

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const validateInputs = () => {
    const username = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass1 = document.getElementById('pass1').value;
    const pass2 = document.getElementById('pass2').value;
    const contact = document.getElementById('contact').value.trim();
    const pincode = document.getElementById('pincode').value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (username === '' || email === '' || pass1 === '' || pass2 === '') {
      alert('All fields are required');
      return false;
    }
    
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return false;
    }

    if (pass1.length < 8) {
      alert('Password must be at least 8 characters');
      return false;
    }

    if (pass1 !== pass2) {
      alert('Passwords do not match');
      return false;
    }

    if (pincode.length !== 6) {
      alert('Invalid Pincode. It must be 6 digits long.');
      return false;
    }

    if (contact.length !== 10 || isNaN(contact)) {
      alert('Enter a valid 10-digit mobile number');
      return false;
    }

    return true;
  };

  const submitdata = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!validateInputs()) {
      return;
    }

    // Gather form data
    const formData = new FormData(e.target);

    // Call the server action
    const result = await officials_data(formData);

    if (result == 1) {
      console.log("Success! Saved to DB");
    } else if (result == 0) {
      console.log("Error saving to DB");
      alert("Something went wrong");
    } else {
      alert("User already exists");
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
        <div className="sm:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-[#4527a5] text-center">Create Profile</h2>
          <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">Create a new account</p>

          <form className="flex flex-col gap-2" onSubmit={submitdata} method="post">
            <input className="p-2 mt-8 rounded-xl border" type="text" id="name" name="name" placeholder="Name" />
            <input className="p-2 mt-8 rounded-xl border" type="email" id="email" name="email" placeholder="Email" />
            <input className="p-2 mt-8 rounded-xl border" type="text" name="pincode" id='pincode' placeholder="Taluka Pincode" />
            <input className="p-2 mt-8 rounded-xl border" type="text" name="vai" id='contact' placeholder="Contact Number" />

            <div className="relative">
              <input className="p-2 mt-8 rounded-xl border w-full" type={passwordType} id="pass1" name="password" placeholder="Password" />
              <svg className="bi bi-eye-fill absolute top-1/2 right-4 translate-y-1/2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" viewBox="0 0 16 16" onClick={togglePasswordVisibility}>
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>

            <input className="p-2 mt-8 rounded-xl border" type="password" id="pass2" name="password1" placeholder="Confirm Password" />

            <button className="Login-button rounded-xl font-bold text-white bg-blue-500 py-2 mt-4">Submit</button>
          </form>
        </div>

        <div className="sm:block hidden w-1/2 min-h-scree">
          <div className='h-[100%] bg-green-600 rounded-2xl w-[100%] '>
            <img className="w-full h-full object-cover sm:block hidden rounded-2xl" src="https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700237/82718617-happy-school-children-in-front-of-school-building.jpg" alt="img-login" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;