import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout/Layout'
import SEO from '../components/seo'

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <h1>NOT FOUND</h1>
      <h1>404</h1>
    </Container>
  </Layout>
)

export default NotFoundPage
