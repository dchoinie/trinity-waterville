import React from 'react'
import { FaCaretRight } from 'react-icons/fa'

const Events = () => {
    return (
        <div className="container mx-auto px-24 py-24">
            <div className="flex justify-center">
                <h2 className="text-4xl text-gray-800 font-bold">Upcoming Events</h2>
            </div>
            <div className="flex flex-col">
                <div className="flex w-full p-6 justify-between">
                    <div className="flex border-l-2 border-red-500">
                        <div className="flex flex-col items-center ml-4 mr-12">
                            <span className="text-2xl text-gray-700">11</span>
                            <span className="text-2xl text-gray-700">FEB</span>
                        </div>
                        <div className="flex self-center mx-12">
                            <h3 className="text-4xl text-gray-800">Title Of Event</h3>
                        </div>
                        <div className="flex self-center mx-12">
                            <span className="text-2xl text-gray-700">Trinity Evangelical Lutheran Church</span>
                        </div>
                    </div>
                    <div className="flex self-center">
                        <span className="text-2xl text-gray-700 mr-2">View Details</span>
                        <FaCaretRight className="text-gray-700 self-center text-2xl" />
                    </div>
                </div>
                <div className="flex w-full p-6 justify-between">
                    <div className="flex border-l-2 border-red-500">
                        <div className="flex flex-col items-center ml-4 mr-12">
                            <span className="text-2xl text-gray-700">14</span>
                            <span className="text-2xl text-gray-700">FEB</span>
                        </div>
                        <div className="flex self-center mx-12">
                            <h3 className="text-4xl text-gray-800">Title Of Event</h3>
                        </div>
                        <div className="flex self-center mx-12">
                            <span className="text-2xl text-gray-700">Trinity Evangelical Lutheran Church</span>
                        </div>
                    </div>
                    <div className="flex self-center">
                        <span className="text-2xl text-gray-700 mr-2">View Details</span>
                        <FaCaretRight className="text-gray-700 self-center text-2xl" />
                    </div>
                </div>
                <div className="flex w-full p-6 justify-between">
                    <div className="flex border-l-2 border-red-500">
                        <div className="flex flex-col items-center ml-4 mr-12">
                            <span className="text-2xl text-gray-700">22</span>
                            <span className="text-2xl text-gray-700">FEB</span>
                        </div>
                        <div className="flex self-center mx-12">
                            <h3 className="text-4xl text-gray-800">Title Of Event</h3>
                        </div>
                        <div className="flex self-center mx-12">
                            <span className="text-2xl text-gray-700">Trinity Evangelical Lutheran Church</span>
                        </div>
                    </div>
                    <div className="flex self-center">
                        <span className="text-2xl text-gray-700 mr-2">View Details</span>
                        <FaCaretRight className="text-gray-700 self-center text-2xl" />
                    </div>
                </div>
                <div className="flex w-full p-6 justify-between">
                    <div className="flex border-l-2 border-red-500">
                        <div className="flex flex-col items-center ml-4 mr-12">
                            <span className="text-2xl text-gray-700">28</span>
                            <span className="text-2xl text-gray-700">FEB</span>
                        </div>
                        <div className="flex self-center mx-12">
                            <h3 className="text-4xl text-gray-800">Title Of Event</h3>
                        </div>
                        <div className="flex self-center mx-12">
                            <span className="text-2xl text-gray-700">Trinity Evangelical Lutheran Church</span>
                        </div>
                    </div>
                    <div className="flex self-center">
                        <span className="text-2xl text-gray-700 mr-2">View Details</span>
                        <FaCaretRight className="text-gray-700 self-center text-2xl" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events
