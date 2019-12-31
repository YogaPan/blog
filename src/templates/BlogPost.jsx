import React from 'react'
import { useSpring, animated } from 'react-spring'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-bottom: 56px;
`

const PostContainer = styled.div`
  width: 100%;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

const AnimatedPostContainer = animated(PostContainer)

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const props = useSpring({
    config: {
      duration: 200,
    },
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(10px)' },
  })

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <AnimatedPostContainer style={props}>
        <Title>{post.frontmatter.title}</Title>
        <Content
          dangerouslySetInnerHTML={{
            __html: post.html,
          }}
        />
      </AnimatedPostContainer>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
