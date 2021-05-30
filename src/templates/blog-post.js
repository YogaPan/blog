import React from 'react'
import { animated } from 'react-spring'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from 'styled-components'
import { Box } from 'rebass'
import Layout from '@components/Layout/Layout'
import SEO from '@components/Seo'
import useFadeIn from '@hooks/useFadeIn'

const Title = styled.h1`
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const AnimatedBox = animated(Box)

const components = {
  // TODO
}

export default function BlogPost({ data: { mdx } }) {
  const props = useFadeIn()
  return (
    <Layout>
      <SEO title={mdx.frontmatter.title} />
      <AnimatedBox style={props} width="100%">
        <Title>{mdx.frontmatter.title}</Title>
        <MDXProvider components={components}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </AnimatedBox>
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
