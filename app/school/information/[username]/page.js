'use client'

import React, { useEffect } from 'react';
import '@/public/schoolcard.css'
import { useState } from 'react';
import Navbar from '@/app/components/Navbar';

function SchoolCard() {
    const [school, setschool] = useState(null);

    useEffect(() => {
        setschool({
            School_Name: 'BMS',
            School_Type: 'Boys',
            Lowclass: '1',
            Highclass: '10',
            Total_Class_Rooms: '15',
            classrooms_In_Good_Condition: '12',
            Total_Boys_Func_Toilet: '8',
            Total_Girls_Func_Toilet: '0',
            Urinal_Boys: '6',
            Urinal_Girls: '0',
            Drinking_Water_Available: true,
            Library_Availability: false,
            Playground_Available: true,
            Desktop: '8',
            no_of_students: '300',
        })
    }, [])

    if (school == null) return (
        <div>Loading....</div>
    )

    return (
        <>
        <Navbar/>
        <div className="school-card">
            <h2 className="school-card-title">{school.School_Name} School</h2>
            <ul className="school-card-list">
                <li className="school-card-list-item">
                    <span className="school-card-label">Type:</span>
                    <span className="school-card-value">{school.School_Type}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Classes:</span>
                    <span className="school-card-value">{school.Lowclass} - {school.Highclass}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Total Classrooms:</span>
                    <span className="school-card-value">{school.Total_Class_Rooms}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Good Condition:</span>
                    <span className="school-card-value">{school.classrooms_In_Good_Condition}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Boys Toilets:</span>
                    <span className="school-card-value">{school.Total_Boys_Func_Toilet}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Girls Toilets:</span>
                    <span className="school-card-value">{school.Total_Girls_Func_Toilet}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Boys Urinals:</span>
                    <span className="school-card-value">{school.Urinal_Boys}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Girls Urinals:</span>
                    <span className="school-card-value">{school.Urinal_Girls}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Drinking Water:</span>
                    <span className="school-card-value">{school.Drinking_Water_Available ? 'Available' : 'Not Available'}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Library:</span>
                    <span className="school-card-value">{school.Library_Availability ? 'Available' : 'Not Available'}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Playground:</span>
                    <span className="school-card-value">{school.Playground_Available ? 'Available' : 'Not Available'}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Desktops:</span>
                    <span className="school-card-value">{school.Desktop}</span>
                </li>
                <li className="school-card-list-item">
                    <span className="school-card-label">Students:</span>
                    <span className="school-card-value">{school.no_of_students}</span>
                </li>
            </ul>
        </div>
        </>
    );
}

export default SchoolCard;