import React from 'react'
import { animated } from 'react-spring'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// import { MDXProvider } from '@mdx-js/react'
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

export default function BlogPost({ data: { ghostPost } }) {
  const props = useFadeIn()
  return (
    <Layout>
      <SEO pageTitle={ghostPost.title} pageDescription={ghostPost.excerpt} />
      <AnimatedBox style={props} width="100%">
        <Title>{ghostPost.title}</Title>
        <section
          dangerouslySetInnerHTML={{ __html: ghostPost.childHtmlRehype.html }}
        />
        {/* <MDXProvider>
          <MDXRenderer>{ghostPost.body}</MDXRenderer>
        </MDXProvider> */}
      </AnimatedBox>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      id
      title
      childHtmlRehype {
        html
      }
      excerpt
      meta_description
    }
  }
`
