import React from 'react'
import BackgroundImage from 'gatsby-background-image'

export default function herosection({img, title, subtitle, heroclass}) {
    return (
        <BackgroundImage className={heroclass} fluid={img}>
            <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
            <div>
                <h6 className="text-warning">{subtitle}</h6>
            </div>
        </BackgroundImage>
    )
}
