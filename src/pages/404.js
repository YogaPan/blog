import React from 'react'
import { Flex } from 'rebass'
import Layout from '@components/Layout/Layout'
import SEO from '@components/Seo'

const NotFoundPage = () => (
  <Layout>
    <SEO pageTitle="404: Not found" />
    <Flex
      height={300}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <h1>NOT FOUND</h1>
      <h1>404</h1>
    </Flex>
  </Layout>
)

export default NotFoundPage
