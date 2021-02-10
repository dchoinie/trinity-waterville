import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { FaSitemap } from 'react-icons/fa'

export const Hero = () => {
    const data = useStaticQuery(graphql`
    {
        hero: file(relativePath: {eq: "cross.jpg"}) {
          childImageSharp {
            fluid(quality: 90) {
              src
              srcSet
              ...GatsbyImageSharpFluid
            }
          }
        }
        site {
            siteMetadata {
                title
                city_state
            }
        }
      }
    `)
    return (
        <div className="h-screen" style={{marginTop: "-140.8px"}}>
            <BackgroundImage fluid={data.hero.childImageSharp.fluid} style={{width: "100%", height: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div className="container mx-auto px-12 h-full">
                    <div className="flex flex-col justify-center h-full pt-24" style={{maxWidth: "60%"}}>
                        <h1 className="text-6xl text-white leading-none mb-4">Welcome to {data.site.siteMetadata.title}</h1>
                        <h2 className="text-indigo-900 text-2xl mb-4">Serving the Waterville, Elysian, Morristown Area</h2>
                        <button className="self-start bg-red-500 px-6 py-2 rounded-md shadow text-white font-bold capitalize">Call-to-action button</button>
                    </div>
                </div>
            </BackgroundImage>
        </div>
    )
}

export default Hero