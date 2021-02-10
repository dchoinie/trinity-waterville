import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import OurChurch from "../components/OurChurch"
import ServiceSchedule from "../components/ServiceSchedule"
import Events from "../components/Events"

// markup
const IndexPage = () => {
  return (
    <Layout>
     <Hero />
     <OurChurch />
     <ServiceSchedule />
     <Events />
    </Layout>
  )
}

export default IndexPage
