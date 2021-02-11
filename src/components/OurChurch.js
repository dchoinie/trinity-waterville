import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaAngleRight } from 'react-icons/fa'

export const OurChurch = () => {
    const data = useStaticQuery(graphql`
    {
        interior: file(relativePath: {eq: "interior3.jpg"}) {
          childImageSharp {
            fluid(quality: 80) {
              src
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
    }
    `)
    return (
        <div className="flex py-24">
            <div className="flex justify-center w-1/2 pr-6">
                <Img fluid={data.interior.childImageSharp.fluid} className="w-full shadow rounded" style={{maxHeight: "700px"}} />
            </div>
            <div className="flex flex-col w-1/2 p-6 self-center justify-center">
                <h4 className="text-red-500 text-xl underline mb-6">Trinity Evangelical Lutheran Church</h4>
                <h2 className="text-4xl text-gray-800 mb-6 font-bold">Our Church</h2>
                <p className="mb-6 text-gray-700">Trinity Evangelical Lutheran Church is a congregation gathered by the Holy Spirit around our Lord’s saving Word and Sacraments. At the center of our life together is Jesus Christ, the Lamb of God who takes away the sin of the world.</p>
                <Link to="/" className="flex bg-red-500 text-white rounded shadow px-6 py-2 self-start text-lg hover:bg-red-700">
                    <span className="mr-2">Learn More</span>
                    <FaAngleRight className="self-center" />
                </Link>
            </div>
        </div>
    )
}

export default OurChurch