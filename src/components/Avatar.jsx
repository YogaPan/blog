import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

export default function Avatar({ data }) {
  return <Img fluid={data.file.childImageSharp.fixed} />
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/avatar.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
