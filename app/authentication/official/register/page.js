'use client'

import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
// import { submitdata } from '@/app/server/actions';
import { userAgentFromString } from 'next/server';
import { redirect } from 'next/navigation';
import Result from 'postcss/lib/result';
import { officials_register_data } from '@/app/server/actions';

const page = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [bool, setbool] = useState(false);
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [otpinput, setotpinput] = useState();
    const [bool1, setbool1] = useState(0);
    const mainotp = useRef([]);


    const sendEmail = async () => {
        // e.preventDefault();
        console.log("vaibhav pokale mmmmmmmmmmmmmmmmmmmmmmmmmm", otp)
        mainotp.current.otp = otp;
        mainotp.current.email = email;
        const expirationtime = Date.now() + 10 * 1000;
        mainotp.current.expirationtime = expirationtime;

        console.log(mainotp, "  MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM");

        const res = await fetch('/api/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp, email, name }),
        })

        let data = await res.json();
        console.log(data);
    }

    const togglePassword = () => {
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
    };

    const passmatch = async (e) => {

        const contact = document.getElementById('contact').value;

        if (contact.length !== 10) {
            alert("Enter valid number");
            return false;
        }

        if (!bool1) {
            alert("Email not verified");
            return false;
        }

        try {
            const form = document.getElementById('form');
            const formData = new FormData(form); // Ensure formData is correctly populated
            const result = await officials_register_data(formData);

            if (result === 0) alert("Something went wrong");
            else if (result === 2) {
                alert("Official already exits");
            }
            else {
                console.log("success.........");
                router.push(`/official/home/${result.pincode}?oid=${result.oid}`);
            }

            // redirect(`/shopinfo/aboutshop/?id=${res[0].id}`);
        } catch (err) {
            console.error(err);
            alert('An error occurred while submitting data');
        }
    };


    useEffect(() => {
        setbool1(0);
    }, [email])

    const handleEmailChange = (e) => {
        setemail(e.target.value);
    };

    const handlenameChange = (e) => {
        setname(e.target.value);
    };


    const handleotpChange = (e) => {
        setotpinput(e.target.value);
    };

    const checkotp = (e) => {
        e.preventDefault();
        console.log(otpinput, mainotp.current.otp, "mmmmmmmmmmmmmmmmm")
        const stopinput = document.getElementById('email');
        // stopinput.disabled = true;
        if (otpinput === mainotp.current.otp && mainotp.current.email === email && Date.now() < mainotp.current.expirationtime) {
            setbool(false);
            setbool1(1);
        }
        else if (Date.now() > mainotp.current.expirationtime) {
            setbool(false);
            setbool1(2);
        }
    }

    return (
        <div>
            <section className="bg-gray-50 min-h-screen flex items-center justify-center">
                {/* Login container */}
                <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
                    {/* Form */}
                    <div className="sm:w-1/2 px-16">
                        <h2 className="font-bold text-2xl text-[#4527a5] text-center">Sign UP</h2>
                        <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">Create a new account</p>

                        {/* Data entry group */}
                        <form id='form' className="flex flex-col gap-2" action={(e) => { passmatch(e) }}>
                            <input onChange={handlenameChange} value={name} className="p-2 mt-8 rounded-xl border" type="text" id="username" name="name" placeholder="Name" required />
                            <div className='mt-8  gap-1 flex'>
                                <input onChange={handleEmailChange} className="p-2 rounded-xl border w-52" type="email" id="email" name="email" value={email} placeholder="Email" required />

                                {bool1 === 0 && <button data-modal-target="default-modal" onClick={() => { sendEmail(); setbool(true) }} data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
                                    Verify
                                </button>}
                                {bool1 === 2 && <button data-modal-target="default-modal" onClick={() => { sendEmail(); setbool(true) }} data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2.5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
                                    Resend
                                </button>}
                                {bool1 === 1 && <div className='w-30 h-30'><img className='w-12 h-10 ' src="https://cdn-icons-png.flaticon.com/512/7595/7595571.png" alt="" /></div>}



                                <div id="default-modal" tabindex="-1" aria-hidden="true" class={`${bool ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-[25%] md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
                                    <div class="relative p-4 w-full max-w-2xl max-h-full">
                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            {/* <form onSubmit={checkotp}> */}
                                            <div className='flex gap-4 ml-6 mt-2'>
                                                <input onChange={handleotpChange} type="text" className="p-2 mt-4 rounded border" placeholder="Verify OTP" />
                                                <button
                                                    type="button"
                                                    onClick={() => setbool(false)}
                                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    data-modal-hide="default-modal"
                                                >
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                        />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button></div>

                                            <button onClick={checkotp} type="submit" className="text-white bg-blue-500 mt-3 mb-2 hover:bg-blue-600 rounded-lg px-4 py-2 ml-[32%]">
                                                Submit
                                            </button>
                                            {/* </form> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <input className="p-2 mt-8 rounded-xl border" type="number" id='contact' name="contact" placeholder="Contact Number" required />
                            <div className="relative">
                                <input className="p-2 mt-8 rounded-xl border w-full" type={passwordType} id="pass1" name="password" placeholder="Set Password" required />

                                {/* SVG Eye */}
                                <svg
                                    className="bi bi-eye-fill absolute top-1/2 right-4 translate-y-1/2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="gray"
                                    viewBox="0 0 16 16"
                                    id="eyeid"
                                    onClick={togglePassword}
                                >
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>
                            </div>
                            <div className="relative">
                                <input className="p-2 mt-8 rounded-xl border w-full" type={passwordType} id="pass1" name="password1" placeholder="Provided Password" required />

                                {/* SVG Eye */}
                                <svg
                                    className="bi bi-eye-fill absolute top-1/2 right-4 translate-y-1/2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="gray"
                                    viewBox="0 0 16 16"
                                    id="eyeid"
                                    onClick={togglePassword}
                                >
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>
                            </div>
                            <input className="p-2 mt-8 rounded-xl border" type="text" id="pass2" name="pincode" placeholder="Pincode" required />
                            <button className="Login-button rounded-xl font-bold text-white bg-blue-500 py-2" type="submit">Submit</button>
                        </form>

                        <div className="mt-10 text-center flex gap-1">
                            <p>Already have an account?</p> <a href="/authentication/official/login" className="text-blue-500"> Login</a>
                        </div>
                    </div>

                    <div className="sm:block hidden w-1/2 min-h-scree">
                        <div className='h-[100%] bg-green-600 rounded-2xl w-[100%] '>
                            <img className="w-full h-full object-cover sm:block hidden rounded-2xl" src="https://previews.123rf.com/images/dualororua/dualororua1707/dualororua170700237/82718617-happy-school-children-in-front-of-school-building.jpg" alt="img-login" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page