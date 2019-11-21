import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
  margin-bottom: 56px;
`

const PostContainer = styled.div`
  width: 100%;
`

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer>
        <Title>{post.frontmatter.title}</Title>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
