import React from 'react'
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

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <PostContainer>
        <Title>{post.frontmatter.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </PostContainer>
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
