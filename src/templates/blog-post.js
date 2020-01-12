import React from 'react'
import { useSpring, animated } from 'react-spring'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'
import { Box, Flex } from 'rebass'
import Layout from '@components/Layout/Layout'
import SEO from '@components/seo'

const Title = styled.h1`
  text-align: center;
  margin-top: 56px;
  margin-bottom: 56px;
`

const AnimatedPostContainer = animated(Box)

export default function BlogPost({ data: { mdx } }) {
  const props = useSpring({
    config: { duration: 200 },
    from: { opacity: 0, transform: 'translateY(10px)' },
    opacity: 1,
    transform: 'translateY(0)',
  })

  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <AnimatedPostContainer style={props} width="100%">
        <Title>{mdx.frontmatter.title}</Title>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        {/* <Flex
          flexDirection="column"
          alignItems="stretch"
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        /> */}
      </AnimatedPostContainer>
    </Layout>
  )
}
export const query = graphql`
  query BlogPostQuery($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
