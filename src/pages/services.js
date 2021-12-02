import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/herosection"
import InfoBlock from "../components/reusable/infoblock"
import Dualinfoblock from "../components/reusable/dualinfoblock"
import TeamPhotosection from "../components/About/Teamphotosection"

const ServicesPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
        img={data.img.childImageSharp.fluid}
        title="Services that we offer" 
        subtitle="" 
        heroclass="about-background"/>
        <Dualinfoblock heading="Amazing online content" image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <InfoBlock
            heading="Testimonials"
        />
        <TeamPhotosection/>
  </Layout>
)

export const query = graphql`
{
  img : file(relativePath: { eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default ServicesPage
