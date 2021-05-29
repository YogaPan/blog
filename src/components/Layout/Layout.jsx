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
      <Flex flexDirection="column" alignItems="center" minHeight="100vh">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Flex flexDirection="column" flex="1" maxWidth={840}>
          {children}
        </Flex>
        <Footer />
        <FloatingButton />
      </Flex>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: node.isRequired
}
