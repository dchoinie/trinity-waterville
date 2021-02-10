import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import cx from 'classnames'
import { FaEnvelope, FaFacebook, FaPrayingHands, FaYoutube, FaAngleDown, FaAngleUp } from 'react-icons/fa'

export const Header = (props) => {
    const data = useStaticQuery(graphql`
	{
		site {
		  siteMetadata {
			address
			city_state
			phone
			title
			zip
		  }
		}
		logo: file(relativePath: {eq: "LCMS_logo.png"}) {
		  childImageSharp {
			fluid {
			  src
			  srcSet
			  ...GatsbyImageSharpFluid
			}
		  }
		}
	  }
    `)
    const [isResourcesOpen, setIsResourcesOpen] = useState(false)
    return (
        <div className={cx('transparent', 'relative', 'z-10', props.backgroundColor)}>
            <div className="container mx-auto px-12 flex flex-col">
                <div className="flex justify-end pt-4">
                    <ul className={cx("flex", "items-center", props.textColor)}>
                        <li className="mx-2">
                            <p className={cx(props.textColor)}>
								{data.site.siteMetadata.address}, {data.site.siteMetadata.city_state} {data.site.siteMetadata.zip}
                            </p>
                        </li>
                        <li className="mx-2">
                            <a href="#">
                                <FaFacebook className="text-xl" />
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="#">
                                <FaYoutube className="text-xl" />
                            </a>
                        </li>
                        <li className="ml-2">
                            <a href="#">
                                <FaEnvelope className="text-xl" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="w-full flex justify-between pb-4 text-lg">
                    <ul className={cx("flex", "items-center", props.textColor)}>
                        <li className="mr-4">
                            <Link to="/">
                                <Img fluid={data.logo.childImageSharp.fluid} className="w-16" />
                            </Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/our-church">Our Church</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li className="mx-3">
                           <button className="flex" onClick={() => setIsResourcesOpen(!isResourcesOpen)}>
                               <span className="mr-2">Resources</span>
                               {!isResourcesOpen ? <FaAngleDown className="self-center" /> : <FaAngleUp className="self-center" />}
                           </button>
                           {isResourcesOpen && (
                            <div className="flex bg-white mt-2 p-6 w-40 absolute rounded shadow">
                                <ul className="flex flex-col text-gray-800">
                                    <li className="mb-2">
                                        <Link to="/">
                                            Links
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/">
                                            Documents
                                        </Link>
                                    </li>
                                    <li className="mb-2">
                                        <Link to="/">
                                            Sermons
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link to="/">
                                            Bulletins
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                           )}
                        </li>
                        <li className="mx-3">
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="mx-3">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <ul className="flex items-center">
                        <li className="text-xl font-bold">
                            <Link to="/" className="flex bg-red-500 px-6 py-2 rounded-md shadow text-white">
                                <span className="mr-2">Support</span>
                                <FaPrayingHands className="self-center" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
