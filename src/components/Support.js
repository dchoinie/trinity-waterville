import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaPrayingHands } from 'react-icons/fa'

const Support = () => {
    const data = useStaticQuery(graphql`
    {
        support: file(relativePath: {eq: "support.jpg"}) {
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
    return (
        <div className="py-24">
            <div className="flex w-full">
                <div className="flex w-1/2 pr-6">
                    <Img fluid={data.support.childImageSharp.fluid} className="w-full rounded shadow" />
                </div>
                <div className="flex flex-col justify-center w-1/2 p-6">
                    <h4 className="text-xl text-red-500 underline mb-6">Make A Donation</h4>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">Support Trinity Evangelical Lutheran Church</h2>
                    <p className="text-gray-700 mb-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit delectus facilis at, asperiores nostrum ullam aliquid labore quas non. Vel tenetur dignissimos quos dicta aperiam molestiae laborum. Praesentium excepturi neque magni eius? Veritatis, commodi similique?
                    </p>
                    <Link to="/" className="flex bg-red-500 text-white rounded shadow px-6 py-2 self-start text-lg hover:bg-red-700">
                        <span className="mr-2">Support Trinity</span>
                        <FaPrayingHands className="self-center" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Support
