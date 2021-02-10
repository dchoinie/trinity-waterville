import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaCaretRight } from 'react-icons/fa'

export const OurChurch = () => {
    const data = useStaticQuery(graphql`
    {
        interior: file(relativePath: {eq: "interior.jpg"}) {
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
        <div className="container mx-auto px-24 flex py-24">
           <div className="flex flex-col w-1/2 p-6 self-center justify-center">
               <h2 className="text-4xl text-gray-700 mb-4 font-bold">Our Church</h2>
               <hr className="mb-4 w-1/2" />
               <p className="mb-4 text-gray-800"><span className="text-red-500 text-xl">Trinity Evangelical Lutheran Church</span> is a congregation gathered by the Holy Spirit around our Lord’s saving Word and Sacraments. At the center of our life together is Jesus Christ, the Lamb of God who takes away the sin of the world.</p>
               <p className="mb-4 text-gray-800">We joyfully believe, teach, and confess the one true faith as it is revealed by the Triune God in Holy Scripture and faithfully confessed in the Book of Concord. Our mission is to serve the surrounding community with the saving Gospel of our Lord Jesus Christ. To accomplish this, we are committed to:</p>
               <ul className="list-disc list-inside mb-4 italic ml-4 text-gray-800">
                   <li>the pure preaching of God’s holy Word</li>
                   <li> the right administration of Christ’s holy Sacraments</li>
                   <li> the faithful teaching of the Christian faith</li>
                   <li> the reverent, liturgical worship of the evangelical Lutheran Church</li>
               </ul>
               <p className="mb-4 text-gray-800">We invite you to join us and grow in the grace and knowledge of Jesus Christ our Savior. Through Him we are called out of darkness into God’s marvelous light.</p>
               <Link to="/" className="flex border border-gray-800 text-gray-800 self-center px-6 py-2 rounded hover:bg-gray-800 hover:text-white">
                   <span className="mr-2">Learn More</span>
                   <FaCaretRight className="self-center" />
               </Link>
           </div>
           <div className="flex justify-center w-1/2 p-6">
               <Img fluid={data.interior.childImageSharp.fluid} className="w-3/4 shadow-md rounded" />
           </div>
        </div>
    )
}

export default OurChurch