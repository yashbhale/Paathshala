// PaathShala Home Page
'use client'

import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-70 p-4 sticky top-0 z-40 shadow-lg ">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-bold text-lg z-10 relative">PaathShala</a>
        <div>
          <a href="/login-school" className="text-white px-4 z-10 relative">Login as School</a>
          <a href="/login-official" className="text-white px-4 z-10 relative">Login as Official</a>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    const text = paragraphRef.current.textContent;
    paragraphRef.current.textContent = '';
    let index = 0;

    const typeEffect = () => {
      if (index < text.length) {
        paragraphRef.current.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 20); // Adjust the speed of the typing effect here
      }
    };

    typeEffect();
  }, []);

  return (
    <div className="homer">
      <div className="relative min-h-screen">
        <img
          src="https://c1.wallpaperflare.com/preview/245/878/523/building-education-florida-photos.jpg"
          alt="Sample Image"
          className="w-full h-full object-cover absolute inset-0 -z-20"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Navbar />
        <div className="flex items-center justify-center min-h-screen relative backdrop-blur-sm z-20">
          <div className="text-center space-y-6">
            <img
              src="../logo1.png"
              alt="PaathShala Logo"
              className="w-80 object-cover absolute inset-0 z-20 mx-auto my-4"
            />
            <h1 className="text-4xl font-bold text-white">Welcome to PaathShala</h1>
            <p className="text-white max-w-xl mx-auto">
              This platform is designed to streamline the educational process by providing a seamless
              interface for both schools and officials. Our goal is to make the management of educational
              data more efficient and effective.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/authentication/school/login"
                className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-indigo-600"
              >
                School
              </a>
              <a
                href="/authentication/official/login"
                className="px-4 py-2 bg-violet-500 text-white rounded-md hover:bg-indigo-600"
              >
                Official
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">About PaathShala</h2>
            <p ref={paragraphRef} className="text-lg max-w-3xl mx-auto">
              PaathShala is a modern educational platform designed to make the management of school data more efficient. We offer an intuitive interface for both school administrators and officials, ensuring that all educational data is easily accessible and manageable. Our goal is to support the educational community by providing tools that enhance productivity and streamline processes. PaathShala aligns with the 'Paperless India' initiative, aiming to modernize the education sector through innovative solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;