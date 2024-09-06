'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function SchoolForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    schoolType: '',
    lowClass: '',
    highClass: '',
    Total_Teacher:'',
    totalClassrooms: '',
    classroomsInGoodCondition: '',
    totalBoysFuncToilet: '',
    totalGirlsFuncToilet: '',
    desktop: '',
    noOfStudents: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/rate-school');  // Corrected 'psuh' to 'push'
  };

  return (
    <div className='w-[100%] min-h-screen bg-slate-900'>
      <div className="max-w-lg mx-auto p-8 bg-slate-800 rounded-lg shadow-md border border-gray-200">
      <h2 className="text-xl font-bold mb-6">Enter School Information</h2> 
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2 font-semibold text-sm text-gray-700">School Type:</label>
        <select 
          name="schoolType" 
          value={formData.schoolType} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required
        >
          <option value="">Select</option>
          <option value="girls">Girls</option>
          <option value="boys">Boys</option>
          <option value="combined">Combined</option>
        </select>

        <label className="mb-2 font-semibold text-sm text-gray-700">Low Class:</label>
        <input 
          type="number" 
          name="lowClass" 
          value={formData.lowClass} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          min={1} 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">High Class:</label>
        <input 
          type="number" 
          name="highClass" 
          value={formData.highClass} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          max={12} 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Total Classrooms:</label>
        <input 
          type="number" 
          name="totalClassrooms" 
          value={formData.totalClassrooms} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Total Number of Teachers:</label>
        <input 
          type="number" 
          name="Total_Teacher" 
          value={formData.Total_Teacher} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Classrooms in Good Condition:</label>
        <input 
          type="number" 
          name="classroomsInGoodCondition" 
          value={formData.classroomsInGoodCondition} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Total Boys Functional Toilets:</label>
        <input 
          type="number" 
          name="totalBoysFuncToilet" 
          value={formData.totalBoysFuncToilet} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Total Girls Functional Toilets:</label>
        <input 
          type="number" 
          name="totalGirlsFuncToilet" 
          value={formData.totalGirlsFuncToilet} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">Desktop Computers:</label>
        <input 
          type="number" 
          name="desktop" 
          value={formData.desktop} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <label className="mb-2 font-semibold text-sm text-gray-700">No of Students:</label>
        <input 
          type="number" 
          name="noOfStudents" 
          value={formData.noOfStudents} 
          onChange={handleChange} 
          className="p-3 mb-5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" 
          required 
        />

        <button 
          type="submit" 
          className="mt-4 p-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Next
        </button>
      </form>
    </div>
    </div>
  );
}

export default SchoolForm;
