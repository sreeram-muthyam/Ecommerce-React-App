import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/herosection"
import InfoBlock from "../components/reusable/infoblock"
import Dualinfoblock from "../components/reusable/dualinfoblock"
import TeamPhotosection from "../components/About/Teamphotosection"

const AboutPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
        img={data.img.childImageSharp.fluid}
        title="About Learn Code Online" 
        subtitle="" 
        heroclass="about-background"/>
        <Dualinfoblock heading="Message from CEO" image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
        <InfoBlock
            heading="About our Vision"
        />
        <TeamPhotosection/>
  </Layout>
)

export const query = graphql`
{
  img : file(relativePath: { eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage
