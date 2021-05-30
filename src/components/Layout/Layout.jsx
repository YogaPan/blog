import React from 'react'
import { Flex } from 'rebass'
import { node } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import theme from '@config/theme'
import { ThemeProvider } from '@emotion/react'
import Header from './Header'
import Footer from './Footer'
import FloatingButton from './FloatingButton'

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Flex justifyContent="center" width="100%" minHeight="100vh">
        <Flex flexDirection="column" flex="0 1 880px" padding="0 20px">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Flex flexDirection="column" flex="1">
            {children}
          </Flex>
        </Flex>
      </Flex>
      <Footer />
      <FloatingButton />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node.isRequired
}
