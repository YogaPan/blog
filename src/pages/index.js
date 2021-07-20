import React, { useState } from 'react'
import { animated } from 'react-spring'
import { graphql } from 'gatsby'
import { Box, Flex } from 'rebass'
import useFadeIn from '@hooks/useFadeIn'
import SEO from '@components/Seo'
import Layout from '@components/Layout/Layout'
import Pagination from '@components/Pagination'
import Article from '@components/Article'

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
      <SEO />
      <AnimatedBox style={props} mt={[3, 4]}>
        {edges.slice(from, to).map(edge => (
          <Article key={edge.node.id} node={edge.node} />
        ))}
      </AnimatedBox>
      <Pagination
        mt={4}
        totalCount={totalCount}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
      <Flex alignItems="center" justifyContent="center">
        <h3>Total {data.allMdx.totalCount} Posts</h3>
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
