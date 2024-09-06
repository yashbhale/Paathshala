import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full h-14 flex items-center bg-[#0c0d1c]'>
            <div className='w-[60%] ml-[5%]'>
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
            </div>
            <div className='w-[40%] text-white font-bold flex list-none justify-center gap-16'>
                <li>Home</li>
                <li>Login</li>
                <li>About</li>
                <li>Help</li>
            </div>
        </div>
    )
}

export default Navbar
