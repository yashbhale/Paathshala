'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const togglePassword = () => {
    const passwordField = document.getElementById('pass1');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  };

  const checkschooldata = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.target);
    const result = await checkschooldata(formData);

    if (result == 0) alert("Something went wrong");
    else if (result === 2) alert("Not Found");
    else {
      router.push(`/school/profile/${result}`);
    }
  }

  return (
    <section className="bg-gray-300 min-h-screen flex items-center justify-center">
      {/* Login container */}
      <div className="bg-[#7ad3f62a] flex rounded-2xl shadow-lg max-w-3xl p-4">
        {/* Form */}
        <div className="sm:w-1/2 px-16">
          <h2 className="font-bold text-2xl text-[#4527a5] text-center">Login</h2>
          <p className="text-sm mt-7 text-[#6c57b1] text-opacity-70 text-center">
            If you are already a member, easily log in
          </p>

          {/* Data entry group */}
          <form className="flex flex-col gap-4" onSubmit={checkschooldata} >
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              id="udise"
              name="udise"
              placeholder="Udise+ Number"
              required
            />
            <div className="relative">
              <input
                className="p-2 mt-8 rounded-xl border w-full"
                type="password"
                id="pass1"
                name="password"
                placeholder="Your password"
                required
              />

              {/* SVG Eye */}
              <svg
                className="bi bi-eye-fill absolute top-1/2 right-4 translate-y-1/2 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                viewBox="0 0 16 16"
                onClick={togglePassword}
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
              </svg>
            </div>

            <button className="mt-5 login-button rounded-xl font-bold py-2 px-4 bg-blue-600 text-white" >
              Login
            </button>

            <div class="mt-10 grid grid-cols-3 items-center text-gray-400">
              <hr class="border-gray-400" />
              <p class="text-center text-sm">Note</p>
              <hr class="border-gray-400" />
            </div>

            <p className='mt-6 ml-4 font-bold text-slate-700 text-[25px]'>School Admin</p>
          </form>

          <div>

          </div>
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

export default Login;

