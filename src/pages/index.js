import React from 'react'
import { animated } from 'react-spring'
import { Link, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from 'styled-components'
import useFadeIn from '@hooks/useFadeIn'
import SEO from '@components/Seo'
import Layout from '@components/Layout/Layout'

const AnimatedBox = animated(Box)

const ArticleTitle = styled(Link)`
  display: block;
  margin: 16px 0;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: var(--primary-text-color);
  transition: var(--transition-duration);

  &:hover {
    color: var(--primary-icon-hover-color);
  }
`

function Article({ node }) {
  if (/^WIP:/.test(node.frontmatter.title)) return null
  return (
    <Box key={node.id} py={24}>
      <ArticleTitle to={node.fields.slug}>
        {node.frontmatter.title}
      </ArticleTitle>
      <p>{node.excerpt}</p>
      <p style={{ marginBottom: 16 }}>{node.frontmatter.date}</p>
      {/* <p style={{ marginBottom: 16 }}>{node.frontmatter.tags}</p> */}
    </Box>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>{data.allMdx.totalCount} Posts</h1> */}
      <AnimatedBox style={useFadeIn}>
        {data.allMdx.edges.map(edge => (
          <Article key={edge.node.id} node={edge.node} />
        ))}
      </AnimatedBox>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
