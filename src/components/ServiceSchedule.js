import React from 'react'
import { FaClock } from 'react-icons/fa'

export const ServiceSchedule = () => {
    return (
        <div className="conatiner px-24 py-24 bg-gray-100">
            <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-gray-800">Service Schedule</h2>
                <h4 className="text-2xl text-gray-600">Sunday Mornings:</h4>
            </div>
            <div className="flex justify-center py-12">
                <div className="flex flex-col items-center w-1/3 shadow-md border border-gray-200 rounded p-6 mr-4 bg-white">
                    <h5 className="text-gray-700 text-xl underline mb-2">Divine Service</h5>
                    <div className="flex text-gray-600 text-xl">
                        <FaClock className="self-center mr-2 text-red-500" />
                        <span>7:45 AM</span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-1/3 shadow-md border border-gray-200 rounded p-6 mx-4 bg-white">
                    <h5 className="text-gray-700 text-xl underline mb-2">Sunday School / Bible Class</h5>
                    <div className="flex text-gray-600 text-xl">
                        <FaClock className="self-center mr-2 text-red-500" />
                        <span>9:00 AM</span>
                    </div>
                </div>
                <div className="flex flex-col items-center w-1/3 shadow-md border border-gray-200 rounded p-6 ml-4 bg-white">
                    <h5 className="text-gray-700 text-xl underline mb-2">Divine Service</h5>
                    <div className="flex text-gray-600 text-xl">
                        <FaClock className="self-center mr-2 text-red-500" />
                        <span>10:00 AM</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSchedule