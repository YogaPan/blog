import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/Layout/Layout'

const Article = styled.div`
  transition: 0.5s;
  padding: 24px 0;
`

const ArticleTitle = styled.h3`
  transition: var(--transition-duration);
  &:hover {
    text-decoration: underline;
    color: var(--brand-color);
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>{data.allMarkdownRemark.totalCount} Posts</h1> */}
      {data.allMarkdownRemark.edges
        .filter(({ node }) => !/^WIP:/.test(node.frontmatter.title))
        .map(({ node }) => {
          return (
            <Article key={node.id}>
              <Link to={node.fields.slug}>
                <ArticleTitle>{node.frontmatter.title}</ArticleTitle>
              </Link>
              <p>{node.excerpt}</p>
              <p style={{ marginBottom: 16 }}>{node.frontmatter.date}</p>
              {/* <p style={{ marginBottom: 16 }}>{node.frontmatter.tags}</p> */}
            </Article>
          )
        })}
    </Layout>
  )
}

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
            tags
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
