import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/reusable/herosection"
import InfoBlock from "../components/reusable/infoblock"
import Dualinfoblock from "../components/reusable/dualinfoblock"
import CourseCart from "../components/Cart/coursecart"
import BundleCart from "../components/Cart/bundlecart"

const contact = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection 
        img={data.img.childImageSharp.fluid}
        title="I write code" 
        subtitle="LearnCodeOnline.in" 
        heroclass="hero-background"/>
        <InfoBlock heading="About Us"/>
        <CourseCart courses={data.courses}/>
        <Dualinfoblock heading="Our Team" image="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
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

  courses: allContentfulCourses {
    edges {
      node {
        id
        title
        price
        category
        description {
          description
        }
        image {
          file{
            url
          }
        }
      }
    }
  }

}
`

export default contact
