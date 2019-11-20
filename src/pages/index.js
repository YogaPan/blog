import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Article = styled.div`
  padding: 8px 16px;
  transition: 0.1s;
  &:hover {
    /* transform: scale(1.01); */
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>{data.allMarkdownRemark.totalCount} Posts</h1> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Article key={node.id}>
        <Link to={node.fields.slug}>
          <h2>{node.frontmatter.title}</h2>
          <p
            style={{
              fontSize: 16,
              marginBottom: 16,
              color: "hsla(0,0%,0%,0.8)",
            }}
          >
            {node.frontmatter.date}
          </p>
          <p style={{ color: "hsla(0,0%,0%,0.8)" }}>{node.excerpt}</p>
        </Link>
      </Article>
    ))}
    {/* TODO: Pagination Component */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
