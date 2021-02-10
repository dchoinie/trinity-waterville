import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

const Contact = () => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    address
                    city_state
                    zip
                    phone
                    email
                }
            }
        }
    `)
    return (
        <Layout>
            <div className="flex px-24">
                <div className="flex w-1/2 p-6">
                    <form action="" method="post" className="w-full">
                        <div className="flex mb-4">
                            <input type="text" name="" id="" placeholder="First" className="w-1/2 border border-gray-200 p-2 mr-2 rounded"  />
                            <input type="text" name="" id="" placeholder="Last" className="w-1/2 border border-gray-200 p-2 ml-2 rounded"  />
                        </div>
                        <div className="flex mb-4">
                            <input type="email" name="" id="" placeholder="Email" className="w-1/2 border border-gray-200 p-2 mr-2 rounded"  />
                            <input type="tel" name="" id="" placeholder="Phone" className="w-1/2 border border-gray-200 p-2 ml-2 rounded"  />
                        </div>
                        <div className="flex mb-4">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="w-full border border-gray-200 p-2 rounded"></textarea>
                        </div>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="flex flex-col w-1/2 p-6 text-gray-700">
                    <h2 className="text-4xl text-gray-800 font-bold ">Find Us</h2>
                    <hr className="my-2 w-1/2"/>
                    <div className="flex mb-8">
                        <FaMapMarkerAlt className="self-center mr-2 text-2xl" />
                        <div className="flex flex-col">
                            <span>
                                {data.site.siteMetadata.address}
                            </span>
                            <span>
                                {data.site.siteMetadata.city_state} {data.site.siteMetadata.zip}
                            </span>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <FaPhone className="self-center mr-2 text-2xl" />
                        <div className="flex flex-col">
                            <span>
                                {data.site.siteMetadata.phone}
                            </span>
                        </div>
                    </div>
                    <div className="flex mb-8">
                        <FaEnvelope className="self-center mr-2 text-2xl" />
                        <div className="flex flex-col">
                            <span>
                                {data.site.siteMetadata.email}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contact