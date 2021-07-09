import React, { useState } from 'react'
import { animated } from 'react-spring'
import { Link, graphql } from 'gatsby'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'
import useFadeIn from '@hooks/useFadeIn'
import SEO from '@components/Seo'
import Layout from '@components/Layout/Layout'
import Pagination from '@components/Pagination'

const PAGE_SIZE = 5

const backToTop = () => window.scrollTo(0, 0)

const getPaginationConfig = (
  pageIndex,
  pageSize,
  totalCount,
  setPageIndex
) => ({
  from: pageIndex * pageSize,
  to: (pageIndex + 1) * pageSize,
  pageCount: Math.ceil(totalCount / pageSize),
  onPageChange: ({ selected }) => {
    backToTop()
    setPageIndex(selected)
  }
})

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
      <p>{node.frontmatter.description || node.excerpt}</p>
      <p style={{ marginBottom: 16 }}>{node.frontmatter.date}</p>
    </Box>
  )
}

export default function IndexPage({ data }) {
  const [pageIndex, setPageIndex] = useState(0)
  const props = useFadeIn()

  const { edges, totalCount } = data.allMdx
  const { from, to, pageCount, onPageChange } = getPaginationConfig(
    pageIndex,
    PAGE_SIZE,
    data.allMdx.totalCount,
    setPageIndex
  )

  return (
    <Layout>
      <SEO title="Home" />
      <AnimatedBox style={props}>
        {edges.slice(from, to).map(edge => (
          <Article key={edge.node.id} node={edge.node} />
        ))}
      </AnimatedBox>
      <Pagination
        totalCount={totalCount}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
      <Flex alignItems="center" justifyContent="center">
        <h2>Total {data.allMdx.totalCount} Posts</h2>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            tags
            description
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
