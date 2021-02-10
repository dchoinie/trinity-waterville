import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaCopyright, FaEnvelope, FaFacebook, FaYoutube } from 'react-icons/fa'

export const Footer = () => {
    const data = useStaticQuery(graphql`
	{
		site {
		  siteMetadata {
			address
			city_state
			phone
			title
			zip
            title
		  }
		}
	  }
    `)
    return (
        <div className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-center">
                <div className="flex flex-col items-center">
                    <ul className="flex text-lg mb-4">
                        <li className="mr-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/">Our Church</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/">Calendar</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/">Resources</Link>
                        </li>
                        <li className="mx-4">
                            <Link to="/">Gallery</Link>
                        </li>
                        <li className="ml-4">
                            <Link to="/">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex mb-4">
                        <li className="mr-4">
                            <a href="#">
                                <FaFacebook className="text-xl" />
                            </a>
                        </li>
                        <li className="mx-4">
                            <a href="#">
                                <FaYoutube className="text-xl" />
                            </a>
                        </li>
                        <li className="ml-4">
                            <a href="#">
                                <FaEnvelope className="text-xl" />
                            </a>
                        </li>
                    </ul>
                    <p className="flex items-center text-sm text-gray-200">
                        <FaCopyright className="text-sm mr-2" /> {new Date().getFullYear()} {data.site.siteMetadata.title}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer