import Navbar from '@/app/components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='w-full min-h-screen bg-slate-900 flex flex-col'>
            <Navbar />
            <div className='w-full flex flex-col items-center justify-center font-bold pt-5'>
                <h1 className='text-white text-[40px]'>Zila parishad prathmik shala,chinchala</h1>
                <hr class="border-gray-400 w-[40%]" />
            </div>

            <div className='w-full h-80 mt-16 flex flex-col justify-center items-center'>
                <div className='w-[95%] min-h-full my-4 text-white flex justify-between'>
                    <div className='w-[49%] bg-slate-800 rounded-xl flex'>
                        <div className='flex items-center h-full'>
                            <div class="relative size-40 m-2 ml-4">
                                <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                    {/* <!-- Background Circle --> */}
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-gray-200" stroke-width="2"></circle>
                                    {/* <!-- Progress Circle --> */}
                                    <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600" stroke-width="2" stroke-dasharray="40" stroke-dashoffset="100" stroke-linecap="round"></circle>
                                </svg>

                                {/* <!-- Percentage Text --> */}
                                <div class="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                                    <span class="text-center text-2xl font-bold text-blue-600">60%</span>
                                </div>
                                <div className='text-green-500 text-[30px] font-bold mt-2 flex justify-center'>
                                    <p >Progress</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[100%] mt-10 ml-16 h-full flex flex-col bg-yellow-70 items-center'>
                            <div className='bg-red-70 flex mt-4  flex-col h-[100%] w-[100%]'>
                                <div className='flex gap-5 font-bold text-[20px]'>
                                    <p className='text-gray-300'>PlayGround</p>
                                    <div className=' w-[100%]'>
                                        <div class="max-w-60 flex items-center gap-x-1">
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div>
                                                <div class="w-10 text-end">
                                                    <span class="text-md text-gray-800 dark:text-white">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5 font-bold text-[20px] mt-3'>
                                    <p className='text-gray-300'>Washrooms</p>
                                    <div className=' w-[100%]'>
                                        <div class="max-w-60 flex items-center gap-x-1">
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div>
                                                <div class="w-10 text-end">
                                                    <span class="text-md text-gray-800 dark:text-white">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5 font-bold text-[20px] mt-3'>
                                    <p className='text-gray-300'>Infrastrucure</p>
                                    <div className=' w-[100%]'>
                                        <div class="max-w-60 flex items-center gap-x-1">
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div>
                                                <div class="w-10 text-end">
                                                    <span class="text-md text-gray-800 dark:text-white">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5 font-bold text-[20px] mt-3'>
                                    <p className='text-gray-300'>Laboratory</p>
                                    <div className=' w-[100%]'>
                                        <div class="max-w-60 flex items-center gap-x-1">
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div>
                                                <div class="w-10 text-end">
                                                    <span class="text-md text-gray-800 dark:text-white">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-5 font-bold text-[20px] mt-3'>
                                    <p className='text-gray-300'>StudetRatio</p>
                                    <div className=' w-[100%]'>
                                        <div class="max-w-60 flex items-center gap-x-1">
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div class="w-full h-3 flex flex-col justify-center overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-neutral-600" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                            <div>
                                                <div class="w-10 text-end">
                                                    <span class="text-md text-gray-800 dark:text-white">50%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[48%] bg-slate-800 rounded-xl'>
                        <div className='w-[100%] flex justify-center mt-3'>
                            <p className='text-white font-bold text-[20px]'>Funds Section</p>
                        </div>
                        <div className="m-3 w-[96%] h-60 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-blue-950">
                            <div className='flex flex-col ml-5 font-semibold text-gray-400 text-[17px]'>
                                <p className='mt-3'>PlayGround Fund : Ongoing...</p>
                                <p className='mt-3'>Washrooms Fund : Passed</p>
                                <p className='mt-3'>PlayGround Fund : Wrong Information</p>
                                <p className='mt-3'>PlayGround Fund : Wrong Information</p>
                                <p className='mt-3'>PlayGround Fund : Wrong Information</p>
                                <p className='mt-3'>PlayGround Fund : Wrong Information</p>
                                <p className='mt-3'>PlayGround Fund : Wrong Information</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-800 w-[96%] h-96 mt-10 mb-5 mx-auto rounded-xl overflow-y-auto overflow-x-hidden scrollbar-hidden">
                <div className="w-full flex flex-col justify-center mt-3">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-gray-400 text-[30px] font-bold font-serif">Recommendations</p>
                        <hr className="border-gray-400 w-[10%]" />
                    </div>
                    <div className="text-gray-400 m-10 mt-2 text-[24px]">
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <img className="w-8 h-8" src="../../image1.png" alt="Recommendation Image" />
                            <p>Need Funds for 2 girls and 1 boys washrooms</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default page