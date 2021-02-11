import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import OurChurch from "../components/OurChurch"
import ServiceSchedule from "../components/ServiceSchedule"
import Events from "../components/Events"
import Support from "../components/Support"

// markup
const IndexPage = () => {
  return (
    <Layout>
     <Hero />
     <OurChurch />
     <ServiceSchedule />
     <Events />
     <Support />
    </Layout>
  )
}

export default IndexPage
