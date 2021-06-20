import React, { useState } from 'react'
import { animated } from 'react-spring'
import { Link, graphql } from 'gatsby'
import { Box } from 'rebass'
import styled from 'styled-components'
import useFadeIn from '@hooks/useFadeIn'
import SEO from '@components/Seo'
import Layout from '@components/Layout/Layout'
import Pagination from '@components/Pagination'

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
  return (
    <Box key={node.id} py={12}>
      <h1>
        <ArticleTitle to={node.fields.slug}>
          {node.frontmatter.title}
        </ArticleTitle>
      </h1>
      <p>{node.excerpt}</p>
      <p style={{ marginBottom: 16 }}>{node.frontmatter.date}</p>
      {/* <p style={{ marginBottom: 16 }}>{node.frontmatter.tags}</p> */}
    </Box>
  )
}

export default function IndexPage({ data }) {
  const [pageIndex, setPageIndex] = useState(0)
  const props = useFadeIn()
  const pageSize = 5
  const posts = data.allMdx.edges.filter(
    post => !/^WIP:/.test(post.node.frontmatter.title)
  )
  const currentPagePosts = posts.slice(
    pageIndex * pageSize,
    (pageIndex + 1) * pageSize
  )
  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1>{data.allMdx.totalCount} Posts</h1> */}
      <AnimatedBox style={props}>
        {currentPagePosts.map(edge => (
          <Article key={edge.node.id} node={edge.node} />
        ))}
      </AnimatedBox>
      <Pagination
        pageCount={Math.floor(posts.length / pageSize)}
        onPageChange={({ selected }) => {
          window.scrollTo(0, 0)
          setPageIndex(selected)
        }}
      />
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
