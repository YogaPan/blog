import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import Pagination from "../components/Pagination"

const COLOR = {
  GREEN: "#1ca086",
}

const Article = styled.div`
  transition: 0.5s;
  padding: 24px 0;
`

const ArticleTitle = styled.h3`
  transition: 0.2s;
  &:hover {
    text-decoration: underline;
    color: ${COLOR.GREEN};
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {/* <h1>{data.allMarkdownRemark.totalCount} Posts</h1> */}
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Article key={node.id}>
        <Link to={node.fields.slug}>
          <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
          <ArticleTitle>{node.frontmatter.tag}</ArticleTitle>
        </Link>
        <p style={{ color: "hsla(0,0%,0%,0.8)" }}>{node.excerpt}</p>
        <p
          style={{
            fontSize: 16,
            marginBottom: 16,
            color: "hsla(0,0%,0%,0.8)",
          }}
        >
          {node.frontmatter.date}
        </p>
      </Article>
    ))}
    <Pagination />
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
