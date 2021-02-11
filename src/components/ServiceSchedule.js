import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'
import { FaAngleRight, FaExternalLinkAlt } from 'react-icons/fa'

export const ServiceSchedule = () => {
    const data = useStaticQuery(graphql`
    {
        service: file(relativePath: {eq: "divineService.jpg"}) {
          childImageSharp {
            fluid {
              src
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
        bible: file(relativePath: {eq: "bibleStudy.jpg"}) {
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
        <div className="conatiner px-24 py-24 bg-gray-100">
            <div className="flex flex-col items-center">
                <h4 className="text-red-500 text-xl underline mb-6">
                    Worship Schedule
                </h4>
                <h2 className="text-gray-800 text-4xl font-bold mb-6">
                    Sunday Mornings
                </h2>
            </div>
            <div className="flex justify-around mt-12">
                <div className="flex flex-col w-1/3 mx-12">
                    <Img fluid={data.service.childImageSharp.fluid} className="w-full rounded-tl rounded-tr" />
                    <div className="flex flex-col p-6 bg-white rounded-bl rounded-br">
                        <h4 className="text-xl text-red-500 underline text-center mb-6">
                            Divine Service
                        </h4>
                        <h2 className="text-gray-800 font-bold text-4xl text-center mb-6">
                            7:45 AM
                        </h2>
                        <p className="text-gray-700 mb-6 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod est, amet ad, exercitationem necessitatibus omnis accusamus ratione assumenda, doloribus nisi iste id architecto obcaecati.
                        </p>
                        <a href="/" className="flex bg-red-500 text-white rounded shadow px-6 py-2 self-center text-lg hover:bg-red-700">
                            <span className="mr-2">Stream Live</span>
                            <FaExternalLinkAlt className="self-center" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 mx-12">
                    <Img fluid={data.bible.childImageSharp.fluid} className="w-full rounded-tl rounded-tr" />
                    <div className="flex flex-col p-6 bg-white rounded-bl rounded-br">
                        <h4 className="text-xl text-red-500 underline text-center mb-6">
                            Sunday School / Bible Class
                        </h4>
                        <h2 className="text-gray-800 font-bold text-4xl text-center mb-6">
                            9:00 AM
                        </h2>
                        <p className="text-gray-700 mb-6 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod est, amet ad, exercitationem necessitatibus omnis accusamus ratione assumenda, doloribus nisi iste id architecto obcaecati.
                        </p>
                        <a href="/" className="flex bg-red-500 text-white rounded shadow px-6 py-2 self-center text-lg hover:bg-red-700">
                            <span className="mr-2">What We're Studying</span>
                            <FaAngleRight className="self-center" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col w-1/3 mx-12">
                    <Img fluid={data.service.childImageSharp.fluid} className="w-full rounded-tl rounded-tr" />
                    <div className="flex flex-col p-6 bg-white rounded-bl rounded-br">
                        <h4 className="text-xl text-red-500 underline text-center mb-6">
                            Divine Service
                        </h4>
                        <h2 className="text-gray-800 font-bold text-4xl text-center mb-6">
                            10:00 AM
                        </h2>
                        <p className="text-gray-700 mb-6 text-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod est, amet ad, exercitationem necessitatibus omnis accusamus ratione assumenda, doloribus nisi iste id architecto obcaecati.
                        </p>
                        <a href="/" className="flex bg-red-500 text-white rounded shadow px-6 py-2 self-center text-lg hover:bg-red-700">
                            <span className="mr-2">Stream Live</span>
                            <FaExternalLinkAlt className="self-center" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSchedule